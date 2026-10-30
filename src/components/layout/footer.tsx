import { useTranslations } from "next-intl";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const linkClasses = "transition-colors hover:text-accent";

export function Footer() {
  const t = useTranslations("footer");
  const { email, name, phone, social } = siteConfig;

  return (
    <footer className="border-t border-border py-10 text-sm text-muted">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <address
          aria-label={t("contactLabel")}
          className="flex flex-col gap-1 not-italic"
        >
          <a href={`mailto:${email}`} className={linkClasses}>
            {email}
          </a>
          <a href={`tel:${phone.replaceAll(" ", "")}`} className={linkClasses}>
            {phone}
          </a>
          <span>{t("location")}</span>
        </address>
        <div className="flex flex-col gap-1 sm:items-end">
          <div className="flex gap-4">
            <a
              href={social.github}
              rel="noreferrer"
              target="_blank"
              className={linkClasses}
            >
              GitHub
            </a>
            {social.linkedin.startsWith("https://") && (
              <a
                href={social.linkedin}
                rel="noreferrer"
                target="_blank"
                className={linkClasses}
              >
                LinkedIn
              </a>
            )}
          </div>
          <p>
            © {new Date().getFullYear()} {name}. {t("rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
