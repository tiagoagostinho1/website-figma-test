import { MetadataRoute } from "next";

import { siteContent } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.seo.canonical,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

