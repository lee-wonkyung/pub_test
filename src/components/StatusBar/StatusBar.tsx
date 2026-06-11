import styles from "./StatusBar.module.css";

/**
 * iOS status bar (Figma "Status Bar - iPhone" set 21:741). Fixed-height chrome
 * shown at the top of every screen. Time/signal/wifi/battery are decorative.
 */
export function StatusBar() {
  return (
    <div className={styles.bar}>
      <span className={styles.time}>9:41</span>
      <div className={styles.levels}>
        <CellularIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}

function CellularIcon() {
  return (
    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" aria-hidden="true">
      <rect x="0" y="9" width="3" height="4" rx="1" fill="currentColor" />
      <rect x="5" y="6" width="3" height="7" rx="1" fill="currentColor" />
      <rect x="10" y="3" width="3" height="10" rx="1" fill="currentColor" />
      <rect x="15" y="0" width="3" height="13" rx="1" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" aria-hidden="true">
      <path
        d="M8.5 11.5a1.5 1.5 0 100-.01M3 6.5a8 8 0 0111 0M0.5 3.5a12 12 0 0116 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="28" height="13" viewBox="0 0 28 13" fill="none" aria-hidden="true">
      <rect
        x="0.5"
        y="0.5"
        width="24"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <rect x="2" y="2" width="21" height="9" rx="1.5" fill="currentColor" />
      <rect x="26" y="4.5" width="1.5" height="4" rx="0.75" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
