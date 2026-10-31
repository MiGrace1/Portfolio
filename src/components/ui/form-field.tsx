import { cn } from "@/lib/cn";

type FormFieldProps = {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  defaultValue?: string;
  error?: string;
};

const controlClasses =
  "w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-base text-foreground aria-invalid:border-accent";

export function FormField({
  name,
  label,
  type = "text",
  autoComplete,
  multiline = false,
  defaultValue,
  error,
}: FormFieldProps) {
  const errorId = `${name}-error`;
  const controlProps = {
    id: name,
    name,
    required: true,
    autoComplete,
    defaultValue,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={6}
          className={cn(controlClasses, "resize-y")}
          {...controlProps}
        />
      ) : (
        <input type={type} className={controlClasses} {...controlProps} />
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
