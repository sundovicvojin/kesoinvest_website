import type { ContactFormValues } from "@/lib/contact/schema";

type MailDeliveryResult =
  | { ok: true }
  | { ok: false; reason: "configuration" | "provider" };

const resendEndpoint = "https://api.resend.com/emails";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function sendContactEmail(
  values: ContactFormValues,
): Promise<MailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    return { ok: false, reason: "configuration" };
  }

  const sentAt = new Date().toISOString();
  const fullName = `${values.firstName} ${values.lastName}`;
  const text = [
    "Novi upit sa KESO INVEST sajta",
    "",
    `Ime i prezime: ${fullName}`,
    `E-mail: ${values.email}`,
    `Vreme slanja: ${sentAt}`,
    "",
    "Poruka:",
    values.message,
  ].join("\n");
  const html = `
    <h1>Novi upit sa KESO INVEST sajta</h1>
    <p><strong>Ime i prezime:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(values.email)}</p>
    <p><strong>Vreme slanja:</strong> ${escapeHtml(sentAt)}</p>
    <p><strong>Poruka:</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: "Novi upit sa KESO INVEST sajta",
        text,
        html,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    return response.ok
      ? { ok: true }
      : { ok: false, reason: "provider" };
  } catch {
    return { ok: false, reason: "provider" };
  }
}
