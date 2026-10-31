import { z } from "zod";

// Error messages are translation keys from contact.form.errors.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "nameTooShort").max(100, "nameTooLong"),
  email: z
    .string()
    .trim()
    .max(254, "emailInvalid")
    .pipe(z.email("emailInvalid")),
  message: z
    .string()
    .trim()
    .min(10, "messageTooShort")
    .max(5000, "messageTooLong"),
});

export type ContactField = keyof z.infer<typeof contactSchema>;

export type ContactErrorKey =
  | "nameTooShort"
  | "nameTooLong"
  | "emailInvalid"
  | "messageTooShort"
  | "messageTooLong";

export type ContactErrors = Partial<Record<ContactField, ContactErrorKey>>;

export type ContactState = {
  status: "idle" | "success" | "invalid" | "rateLimited" | "failed";
  errors?: ContactErrors;
  values?: Partial<Record<ContactField, string>>;
};

export function getContactErrors(error: z.ZodError): ContactErrors {
  const errors: ContactErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as ContactField;
    errors[field] ??= issue.message as ContactErrorKey;
  }
  return errors;
}
