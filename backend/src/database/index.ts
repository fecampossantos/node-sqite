import { DatabaseSync } from "node:sqlite";
import {
  CREATE_TODO_TABLE,
  GET_ALL_TODOS,
  INSERT_TODO,
  GET_TODO,
  DELETE_TODO,
  UPDATE_TODO_DONE,
} from "./statements";

console.log("connecting to in-memory database");
const database = new DatabaseSync(":memory:");

database.exec(CREATE_TODO_TABLE);

export function getAllTodos() {
  const getAllQUery = database.prepare(GET_ALL_TODOS);

  return getAllQUery.all();
}

export function addTodo(title: string) {
  const addTodo = database.prepare(INSERT_TODO);
  const createdAt = new Date().toString();
  addTodo.run(title, createdAt);
}

export function getTodo(key: number) {
  const getTodo = database.prepare(GET_TODO);
  const todo = getTodo.get(key);

  return todo;
}

export function deleteTodo(key: number) {
  const deleteTodo = database.prepare(DELETE_TODO);
  deleteTodo.run(key);
}

export function checkTodo(key: number) {
  const checkTodo = database.prepare(UPDATE_TODO_DONE);
  checkTodo.run(1, key);
}

export function uncheckTodo(key: number) {
  const uncheckTodo = database.prepare(UPDATE_TODO_DONE);
  uncheckTodo.run(0, key);
}

export default database;
