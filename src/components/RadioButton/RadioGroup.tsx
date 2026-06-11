import styles from "./RadioGroup.module.css";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

/**
 * Figma RadioButton set (21:922, State on/off) laid out as a horizontal group.
 * The radio circle is drawn with CSS rather than the Figma SVG so it stays
 * crisp and themeable.
 */
export function RadioGroup({ name, options, value, onChange }: RadioGroupProps) {
  return (
    <div className={styles.group} role="radiogroup">
      {options.map((opt) => {
        const checked = opt.value === value;
        return (
          <label key={opt.value} className={styles.option}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className={styles.input}
            />
            <span
              className={styles.circle}
              data-checked={checked}
              aria-hidden="true"
            />
            <span className={styles.label} data-checked={checked}>
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}
