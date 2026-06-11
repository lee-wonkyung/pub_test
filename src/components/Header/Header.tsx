import type { ReactNode } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  /** Back/close affordance on the left. Figma icon set (21:20). */
  onBack?: () => void;
  /** Centered title (Figma Header "sub detail" variant has a title). */
  title?: ReactNode;
}

/** Figma Header set (21:649). Back icon + centered title bar, 54px tall. */
export function Header({ onBack, title }: HeaderProps) {
  return (
    <header className={styles.header}>
      {onBack ? (
        <button
          type="button"
          className={styles.back}
          onClick={onBack}
          aria-label="뒤로 가기"
        >
          <ChevronLeft />
        </button>
      ) : (
        <span className={styles.slot} />
      )}

      {title != null && <h1 className={styles.title}>{title}</h1>}

      {/* Right slot keeps the title centered (matches Figma space-between). */}
      <span className={styles.slot} />
    </header>
  );
}

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
