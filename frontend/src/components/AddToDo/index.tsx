import { useState } from "react";
import styles from "./addToDo.module.css";
import Input from "../Input";
import Button from "../Button";

const AddToDo = ({ callback }: { callback: (value: string) => void }) => {
  const [toDoTitle, setToDoTitle] = useState<string>();

  const handleAddToDo = () => {
    if (!toDoTitle) return;
    setToDoTitle("");
    callback(toDoTitle);
  };

  return (
    <div className={styles.wrapper}>
      <Input onChange={setToDoTitle} placeholder="adicionar todo" />
      <Button onClick={() => handleAddToDo()}>+</Button>
    </div>
  );
};

export default AddToDo;
