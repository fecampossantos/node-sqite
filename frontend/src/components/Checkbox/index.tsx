import CheckIcon from "../Icons/Check";
import styles from "./checkbox.module.css";

const Checkbox = ({
  isChecked,
  onClick,
}: {
  isChecked: boolean | number;
  onClick: () => void;
}) => {
  const value: boolean = !!isChecked;
  return (
    <div className={styles.wrapper} onClick={() => onClick()}>
      {value && <CheckIcon size={"16px"} />}
    </div>
  );
};

export default Checkbox;
