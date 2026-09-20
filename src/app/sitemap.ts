import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/luma-residence/", "/reference/", "/o-investitoru/", "/contact/"].map((path, index) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: index < 2 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.7,
  }));
}
