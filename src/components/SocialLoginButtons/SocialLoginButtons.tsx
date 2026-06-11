import styles from "./SocialLoginButtons.module.css";

type Provider = "kakao" | "google" | "apple" | "naver";

interface SocialLoginButtonsProps {
  onSelect?: (provider: Provider) => void;
}

/** Figma Frame 1134 — four 48px round social-login buttons. */
export function SocialLoginButtons({ onSelect }: SocialLoginButtonsProps) {
  return (
    <div className={styles.row}>
      <button
        type="button"
        className={`${styles.circle} ${styles.kakao}`}
        onClick={() => onSelect?.("kakao")}
        aria-label="카카오로 로그인"
      >
        <KakaoIcon />
      </button>
      <button
        type="button"
        className={`${styles.circle} ${styles.google}`}
        onClick={() => onSelect?.("google")}
        aria-label="구글로 로그인"
      >
        <GoogleIcon />
      </button>
      <button
        type="button"
        className={`${styles.circle} ${styles.apple}`}
        onClick={() => onSelect?.("apple")}
        aria-label="애플로 로그인"
      >
        <AppleIcon />
      </button>
      <button
        type="button"
        className={`${styles.circle} ${styles.naver}`}
        onClick={() => onSelect?.("naver")}
        aria-label="네이버로 로그인"
      >
        <NaverIcon />
      </button>
    </div>
  );
}

/* Icons kept as inline SVG placeholders — replace with brand assets via
   download_figma_images (nodeId + imageRef) when wiring real artwork. */
function KakaoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4C7 4 3 7.1 3 11c0 2.5 1.7 4.7 4.2 5.9L6.3 20l3.5-2.3c.7.1 1.5.2 2.2.2 5 0 9-3.1 9-7S17 4 12 4z"
        fill="#000"
      />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.2c0-.6-.1-1.2-.2-1.7H12v3.4h5c-.2 1.2-.9 2.2-1.9 2.9v2.4h3C19.9 17.5 21 15.1 21 12.2z" fill="#4285F4" />
      <path d="M12 21c2.4 0 4.5-.8 6-2.2l-3-2.4c-.8.6-1.9.9-3 .9-2.3 0-4.3-1.6-5-3.7H3.9v2.4C5.4 18.9 8.5 21 12 21z" fill="#34A853" />
      <path d="M7 13.6c-.2-.6-.3-1.1-.3-1.6s.1-1.1.3-1.6V8H3.9C3.3 9.2 3 10.5 3 12s.3 2.8.9 4l3.1-2.4z" fill="#FBBC05" />
      <path d="M12 6.7c1.3 0 2.5.5 3.4 1.3l2.6-2.6C16.5 3.9 14.4 3 12 3 8.5 3 5.4 5.1 3.9 8l3.1 2.4C7.7 8.3 9.7 6.7 12 6.7z" fill="#EA4335" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.9z"
        fill="#fff"
      />
    </svg>
  );
}
function NaverIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 3h4.6l4.7 6.9V3H17v14h-4.6L7.7 10v7H3V3z" fill="#fff" />
    </svg>
  );
}
