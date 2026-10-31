"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import {
  contactSchema,
  getContactErrors,
  type ContactState,
} from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

type ContactMessage = { name: string; email: string; message: string };

async function sendEmail({ name, email, message }: ContactMessage) {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    throw new Error("Contact email is not configured");
  }

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Portfolio : message de ${name}`,
    text: `${name} <${email}>\n\n${message}`,
  });
  if (error) {
    throw new Error(`Resend error: ${error.name}`);
  }
}

export async function sendContactMessage(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Bots fill this hidden field: pretend it worked and send nothing.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = contactSchema.safeParse(values);
  if (!result.success) {
    return {
      status: "invalid",
      errors: getContactErrors(result.error),
      values,
    };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return { status: "rateLimited", values };
  }

  try {
    await sendEmail(result.data);
    return { status: "success" };
  } catch (error) {
    // Logged without the visitor's message or personal data.
    console.error(error instanceof Error ? error.message : "Unknown error");
    return { status: "failed", values };
  }
}
