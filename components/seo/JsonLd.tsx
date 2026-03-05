import { OrganizationJsonLd } from "@/content/site-content";

type JsonLdProps = {
  data: OrganizationJsonLd;
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

