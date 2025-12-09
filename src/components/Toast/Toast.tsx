import { useEffect } from "react";
import styles from "./Toast.module.css";
import type { ToastProps } from "./Toast.types";

export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button className={styles.close} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};
