"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { contactPageContent } from "@/content/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact/schema";
import { classNames } from "@/lib/class-names";

type VisibleField = "firstName" | "lastName" | "email" | "message";
type FieldErrors = Partial<Record<VisibleField, string>>;

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  website: "",
};

const inputClass =
  "type-body min-h-14 w-full rounded-none border-x-0 border-t-0 border-b border-white/25 bg-transparent px-0 py-3 text-white transition-colors placeholder:text-white/35 hover:border-white/55 focus:border-accent focus:outline-none focus-visible:shadow-[var(--focus-ring)]";

function getFieldErrors(values: ContactFormValues) {
  const result = contactFormSchema.safeParse(values);
  if (result.success) return {};

  const flattened = result.error.flatten().fieldErrors;
  return {
    firstName: flattened.firstName?.[0],
    lastName: flattened.lastName?.[0],
    email: flattened.email?.[0],
    message: flattened.message?.[0],
  } satisfies FieldErrors;
}

export function ContactForm() {
  const { form } = contactPageContent;
  const isSubmittingRef = useRef(false);
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [responseMessage, setResponseMessage] = useState("");

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (field !== "website") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (state !== "idle") {
      setState("idle");
      setResponseMessage("");
    }
  };

  const validateField = (field: VisibleField) => {
    const nextErrors = getFieldErrors(values);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmittingRef.current || state === "submitting") return;

    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      setErrors(getFieldErrors(values));
      setState("error");
      setResponseMessage("Proverite označena polja.");
      return;
    }

    setErrors({});
    isSubmittingRef.current = true;
    setState("submitting");
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string[]>;
      };

      if (!response.ok || !data.ok) {
        if (data.errors) {
          setErrors({
            firstName: data.errors.firstName?.[0],
            lastName: data.errors.lastName?.[0],
            email: data.errors.email?.[0],
            message: data.errors.message?.[0],
          });
        }
        setState("error");
        setResponseMessage(data.message ?? form.errorMessage);
        return;
      }

      setValues(initialValues);
      setState("success");
      setResponseMessage(form.successMessage);
    } catch {
      setState("error");
      setResponseMessage(form.errorMessage);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          error={errors.firstName}
          id="contact-first-name"
          label={form.fields.firstName}
        >
          <input
            aria-describedby={errors.firstName ? "contact-first-name-error" : undefined}
            aria-invalid={Boolean(errors.firstName)}
            autoComplete="given-name"
            className={classNames(inputClass, errors.firstName && "border-error")}
            id="contact-first-name"
            maxLength={100}
            name="firstName"
            onBlur={() => validateField("firstName")}
            onChange={(event) => updateField("firstName", event.target.value)}
            required
            type="text"
            value={values.firstName}
          />
        </FormField>

        <FormField
          error={errors.lastName}
          id="contact-last-name"
          label={form.fields.lastName}
        >
          <input
            aria-describedby={errors.lastName ? "contact-last-name-error" : undefined}
            aria-invalid={Boolean(errors.lastName)}
            autoComplete="family-name"
            className={classNames(inputClass, errors.lastName && "border-error")}
            id="contact-last-name"
            maxLength={100}
            name="lastName"
            onBlur={() => validateField("lastName")}
            onChange={(event) => updateField("lastName", event.target.value)}
            required
            type="text"
            value={values.lastName}
          />
        </FormField>

        <FormField
          className="sm:col-span-2"
          error={errors.email}
          id="contact-email"
          label={form.fields.email}
        >
          <input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={classNames(inputClass, errors.email && "border-error")}
            id="contact-email"
            inputMode="email"
            maxLength={254}
            name="email"
            onBlur={() => validateField("email")}
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={values.email}
          />
        </FormField>

        <FormField
          className="sm:col-span-2"
          error={errors.message}
          id="contact-message"
          label={form.fields.message}
        >
          <textarea
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            aria-invalid={Boolean(errors.message)}
            className={classNames(
              inputClass,
              "min-h-44 resize-y",
              errors.message && "border-error",
            )}
            id="contact-message"
            maxLength={5000}
            name="message"
            onBlur={() => validateField("message")}
            onChange={(event) => updateField("message", event.target.value)}
            required
            value={values.message}
          />
        </FormField>
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] size-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          type="text"
          value={values.website}
        />
      </div>

      {form.privacyNotice ? (
        <p className="type-small mt-6 max-w-2xl text-white/55">
          {form.privacyNotice}
          {form.privacyPolicyHref ? (
            <a className="ml-1 underline underline-offset-4" href={form.privacyPolicyHref}>
              Politika privatnosti
            </a>
          ) : null}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
        <Button
          className="w-full sm:w-auto sm:min-w-40"
          disabled={state === "submitting"}
          type="submit"
        >
          {state === "submitting" ? form.submittingLabel : form.submitLabel}
        </Button>
        <p
          aria-live="polite"
          className={classNames(
            "type-small min-h-6",
            state === "success" && "text-accent",
            state === "error" && "text-error",
          )}
          role="status"
        >
          {responseMessage}
        </p>
      </div>
    </form>
  );
}

type FormFieldProps = {
  children: React.ReactNode;
  className?: string;
  error?: string;
  id: string;
  label: string;
};

function FormField({ children, className, error, id, label }: FormFieldProps) {
  return (
    <div className={className}>
      <label className="type-label mb-3 block text-white/65" htmlFor={id}>
        {label} <span className="text-error">*</span>
      </label>
      {children}
      <p
        className="type-small mt-2 min-h-5 text-error"
        id={`${id}-error`}
        role={error ? "alert" : undefined}
      >
        {error}
      </p>
    </div>
  );
}
