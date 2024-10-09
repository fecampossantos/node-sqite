import { DatabaseSync } from "node:sqlite";
import { CREATE_TODO_TABLE } from "./statements";

console.log("connecting to in-memory database");
const database = new DatabaseSync(":memory:");

database.exec(CREATE_TODO_TABLE);

export default database;
