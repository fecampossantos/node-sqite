import { ToDo as IToDo } from "../../interfaces";
import ToDo from "../ToDo";
import styles from "./toDo.module.css";

const ToDoList = ({ toDos }: { toDos: Array<IToDo> }) => (
  <div className={styles.wrapper}>
    {toDos.map((toDo, index) => (
      <ToDo toDo={toDo} key={index} />
    ))}
  </div>
);

export default ToDoList;
