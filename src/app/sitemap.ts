import type { MetadataRoute } from "next";
import { site, nav } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return nav.map((l) => ({
    url: `${base}${l.href === "/" ? "/" : l.href + "/"}`,
    lastModified: new Date(),
  }));
}
