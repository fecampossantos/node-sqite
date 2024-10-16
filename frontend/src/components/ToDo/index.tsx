import { ToDo as iToDo } from "../../interfaces";
import styles from "./toDo.module.css";

import Checkbox from "../Checkbox";
import axios from "axios";
import { useState } from "react";
import { formatDate } from "../../utils/date";
import Button from "../Button";
import DeleteIcon from "../Icons/Delete";

const ToDo = ({ toDo }: { toDo: iToDo }) => {
  const [isDone, setIsDone] = useState<boolean>(!!toDo.done);

  const handleClickOnCheck = async () => {
    if (isDone) {
      await axios.patch(`http://localhost:4000/todo/uncheck/${toDo.key}`);
    } else {
      await axios.patch(`http://localhost:4000/todo/check/${toDo.key}`);
    }

    setIsDone(!isDone);
  };

  const handleDeleteToDo = async () => {
    await axios.delete(`http://localhost:4000/todo/${toDo.key}`);
  };

  return (
    <div className={styles.wrapper}>
      <Checkbox isChecked={isDone} onClick={handleClickOnCheck} />
      <div>{toDo.title}</div>
      {/* <div>{toDo.key}</div> */}
      <div>{formatDate(toDo.created_at)}</div>
      <Button onClick={() => handleDeleteToDo()} transparent>
        <DeleteIcon size={"20px"} />
      </Button>
    </div>
  );
};

export default ToDo;
