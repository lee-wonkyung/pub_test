import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "solid" | "line";
type ButtonSize = "lg" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** solid = filled violet, line = outlined. From Figma Button set (21:498). */
  variant?: ButtonVariant;
  /** lg = 18px text / 18px pad (login), md = 16px CTA. */
  size?: ButtonSize;
  /** Stretch to fill the parent's cross axis (Figma horizontal: fill). */
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "solid",
  size = "lg",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
