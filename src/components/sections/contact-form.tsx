"use client";

import { useTranslations } from "next-intl";
import { useActionState, useState, type FormEvent } from "react";

import { sendContactMessage } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import {
  contactSchema,
  getContactErrors,
  type ContactErrors,
  type ContactState,
} from "@/lib/contact-schema";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const [clientErrors, setClientErrors] = useState<ContactErrors>();
  const errors = clientErrors ?? state.errors ?? {};

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const result = contactSchema.safeParse(
      Object.fromEntries(new FormData(form)),
    );
    if (result.success) {
      setClientErrors(undefined);
      return;
    }

    event.preventDefault();
    const nextErrors = getContactErrors(result.error);
    setClientErrors(nextErrors);
    const [firstInvalidField] = Object.keys(nextErrors);
    const field = form.elements.namedItem(firstInvalidField);
    if (field instanceof HTMLElement) {
      field.focus();
    }
  }

  const fieldError = (field: keyof ContactErrors) => {
    const key = errors[field];
    return key && t(`errors.${key}`);
  };

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      <FormField
        name="name"
        label={t("name")}
        autoComplete="name"
        defaultValue={state.values?.name}
        error={fieldError("name")}
      />
      <FormField
        name="email"
        label={t("email")}
        type="email"
        autoComplete="email"
        defaultValue={state.values?.email}
        error={fieldError("email")}
      />
      <FormField
        name="message"
        label={t("message")}
        multiline
        defaultValue={state.values?.message}
        error={fieldError("message")}
      />
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? t("sending") : t("send")}
      </Button>
      <p role="status" className="text-sm text-accent empty:hidden">
        {state.status === "success" && t("success")}
        {state.status === "rateLimited" && t("rateLimited")}
        {state.status === "failed" && t("failed")}
      </p>
    </form>
  );
}
