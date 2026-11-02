/** True once the Resend variables are set. Server-only: reads secrets. */
export function isEmailConfigured(): boolean {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  return Boolean(RESEND_API_KEY && CONTACT_TO_EMAIL && CONTACT_FROM_EMAIL);
}

/**
 * Local development always shows the form. Deployed builds show it only once
 * email is configured, so visitors never reach a form that cannot send.
 */
export function isContactFormEnabled(): boolean {
  return isEmailConfigured() || process.env.NODE_ENV === "development";
}
