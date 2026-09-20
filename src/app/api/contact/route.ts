import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/contact/email";
import { checkContactRateLimit } from "@/lib/contact/rate-limit";
import { contactFormSchema } from "@/lib/contact/schema";

const MAX_BODY_BYTES = 24 * 1024;

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  headers?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, message: "Nepodržan format zahteva." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, message: "Zahtev je prevelik." }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ ok: false, message: "Neispravan zahtev." }, 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, message: "Zahtev je prevelik." }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, message: "Neispravan JSON zahtev." }, 400);
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const identifier = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const rateLimit = checkContactRateLimit(identifier);

  if (!rateLimit.allowed) {
    return jsonResponse(
      {
        ok: false,
        message: "Previše pokušaja. Pokušajte ponovo kasnije.",
      },
      429,
      { "Retry-After": String(rateLimit.retryAfterSeconds) },
    );
  }

  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonResponse(
      {
        ok: false,
        message: "Polja sadrže neispravne podatke.",
        errors: parsed.error.flatten().fieldErrors,
      },
      400,
    );
  }

  if (parsed.data.website) {
    return jsonResponse({ ok: true }, 200);
  }

  const delivery = await sendContactEmail(parsed.data);
  if (!delivery.ok) {
    return jsonResponse(
      {
        ok: false,
        message: "Slanje trenutno nije dostupno. Pokušajte ponovo kasnije.",
      },
      delivery.reason === "configuration" ? 503 : 502,
    );
  }

  return jsonResponse({ ok: true }, 200);
}
