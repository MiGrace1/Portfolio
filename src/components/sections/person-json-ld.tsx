import type { Content } from "@/lib/content-schema";
import { siteConfig } from "@/lib/site-config";

export function PersonJsonLd({ profile }: { profile: Content["profile"] }) {
  const { name, url, email, phone, social } = siteConfig;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    email,
    telephone: phone.replaceAll(" ", ""),
    jobTitle: profile.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yaoundé",
      addressCountry: "CM",
    },
    sameAs: Object.values(social).filter((link) => link.startsWith("https://")),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
