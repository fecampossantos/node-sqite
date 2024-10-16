import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AddToDo from "./components/AddToDo";
import { ToDo as iToDo } from "./interfaces";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDos, setToDos] = useState<Array<iToDo>>([]);

  useEffect(() => {
    async function getToDos() {
      const { data } = await axios.get("http://localhost:4000/todo");
      const { todos } = data;
      setToDos(todos);
    }

    getToDos();
  });

  async function handleAddToDo(title: string) {
    await axios.post("http://localhost:4000/todo", { title });

    const { data } = await axios.get("http://localhost:4000/todo");
    const { todos } = data;
    setToDos(todos);
  }

  return (
    <div>
      <h1>To Do - Node SQLite in memory test</h1>

      <AddToDo callback={(value) => handleAddToDo(value)} />
      <ToDoList toDos={toDos} />
    </div>
  );
}

export default App;
