import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

import { routing } from "@/i18n/routing";
import { getContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const { profile } = getContent(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#0a0a0f",
      }}
    >
      <div style={{ fontSize: 72, color: "#f0ede8" }}>{siteConfig.name}</div>
      <div style={{ marginTop: 32, fontSize: 36, color: "#e8b86d" }}>
        {profile.title}
      </div>
      <div style={{ marginTop: 32, fontSize: 28, color: "#aaa59d" }}>
        {profile.location}
      </div>
    </div>,
    size,
  );
}
