export interface InputProps {
    type?: "text" | "password" | "number";
    clearable?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  