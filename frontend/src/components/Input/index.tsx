import styles from "./input.module.css";

const Input = ({
  onChange,
  placeholder,
}: {
  onChange: (value: string) => void;
  placeholder: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
};

export default Input;
