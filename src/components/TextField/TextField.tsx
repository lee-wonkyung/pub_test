import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./TextField.module.css";

type TextFieldVariant = "underline" | "box";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** underline = login screen (bottom border only), box = signup screen (bordered box). */
  variant?: TextFieldVariant;
  /** Label rendered above the field. Figma "Label" text node. */
  label?: ReactNode;
  /** Marks the label with a red asterisk (Figma {ts1}\*{/ts1}). */
  required?: boolean;
  /** Trailing slot — password-show icon or an inline "중복확인" button. */
  trailing?: ReactNode;
}

export function TextField({
  variant = "box",
  label,
  required = false,
  trailing,
  className,
  ...rest
}: TextFieldProps) {
  const fieldClasses = [styles.field, styles[variant], className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={styles.wrapper}>
      {label != null && (
        <span className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </span>
      )}
      <span className={fieldClasses}>
        <input className={styles.input} {...rest} />
        {trailing != null && <span className={styles.trailing}>{trailing}</span>}
      </span>
    </label>
  );
}
