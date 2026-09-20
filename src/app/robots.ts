import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo/metadata";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV;

  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
