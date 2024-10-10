import { RequestHandler, RequestParamHandler } from "express";
import database, {
  getAllTodos,
  addTodo,
  getTodo,
  deleteTodo,
  checkTodo,
  uncheckTodo,
} from "../../database";
import { HttpError } from "../../error";

const list: RequestHandler = async (req: any, res: any, next: any) => {
  const todos = getAllTodos();

  res.status(200).json({ todos });
};

const create: RequestHandler = async (req: any, res: any, next: any) => {
  const { body } = req;
  if (!body.title) next(new HttpError("No title found on todo", 400));
  addTodo(body.title);

  res.sendStatus(202);
};

const find: RequestHandler = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const todo = getTodo(id);
  res.status(200).send({ todo });
};

const destroy: RequestHandler = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  deleteTodo(id);
  res.sendStatus(204);
};

const check: RequestHandler = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  checkTodo(id);
  res.sendStatus(200);
};

const uncheck: RequestHandler = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  uncheckTodo(id);
  res.sendStatus(200);
};

export default { list, create, find, destroy, check, uncheck };
