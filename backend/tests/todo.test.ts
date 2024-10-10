import request from "supertest";
import server from "../src/server";
import { addTodo, getTodo } from "../src/database";

describe.skip("Todos", () => {
  describe("/todo", () => {
    test("returns all todos from database", async () => {
      addTodo("todo 1");
      addTodo("todo 2");
      const res = await request(server).get("/todo").expect(200);

      expect(res.body.length).toBe(2);
    });
  });

  describe("/todo/:id", () => {
    test("returns correct todo", async () => {
      addTodo("todo 1");
      addTodo("todo 2");
      const res = await request(server).get(`/todo/${1}`).expect(200);

      expect(res.body.length).toBe(1);
    });
    test("deletes correct todo", async () => {
      addTodo("todo 1");
      addTodo("todo 2");
      const res1 = await request(server).get("/todo").expect(200);

      expect(res1.body.length).toBe(2);

      await request(server).delete(`/todo/${1}`).expect(200);
      const res2 = await request(server).get("/todo").expect(200);

      expect(res2.body.length).toBe(1);
    });
  });

  describe("/todo/check/:id", () => {
    test("changes done to true", async () => {
      addTodo("todo 1");
      let todo: any = getTodo(1);
      expect(todo.done).toBe(false);
      await request(server).post(`/todo/check/${1}`).expect(200);

      todo = getTodo(1);
      expect(todo.done).toBe(true);
    });
  });

  describe("/todo/uncheck/:id", () => {
    test("returns PONG", async () => {
      addTodo("todo 1");
      let todo: any = getTodo(1);
      expect(todo.done).toBe(false);
      await request(server).post(`/todo/check/${1}`).expect(200);

      todo = getTodo(1);
      expect(todo.done).toBe(true);

      await request(server).post(`/todo/uncheck/${1}`).expect(200);

      todo = getTodo(1);
      expect(todo.done).toBe(false);
    });
  });
});
