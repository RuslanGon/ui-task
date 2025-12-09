import { useState } from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export const Input = ({ type = "text", clearable = false, value, onChange, placeholder }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const actualType = type === "password" && showPassword ? "text" : type;

  const handleClear = () => {
    onChange?.({ target: { value: "" } } as any);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type={actualType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.eye}>
          {showPassword ? "🙈" : "👁"}
        </button>
      )}
      {clearable && value && (
        <button type="button" onClick={handleClear} className={styles.clear}>
          ✕
        </button>
      )}
    </div>
  );
};
