import styles from "./button.module.css";

const Button = ({
  children,
  onClick,
  transparent = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  transparent?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${transparent && styles.transparent}`}
    >
      {children}
    </button>
  );
};

export default Button;
