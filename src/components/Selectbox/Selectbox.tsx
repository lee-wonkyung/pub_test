import type { SelectHTMLAttributes } from "react";
import styles from "./Selectbox.module.css";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectboxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Text shown when no value is selected (Figma "년" / "월" / "일"). */
  placeholder: string;
  options: SelectOption[];
}

/** Figma Selectbox set (21:875). Native <select> styled with a chevron. */
export function Selectbox({
  placeholder,
  options,
  className,
  value,
  ...rest
}: SelectboxProps) {
  return (
    <div className={[styles.box, className ?? ""].filter(Boolean).join(" ")}>
      <select
        className={styles.select}
        value={value}
        data-empty={value === "" || value == null}
        {...rest}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className={styles.chevron} aria-hidden="true" />
    </div>
  );
}
