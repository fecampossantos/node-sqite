import request from "supertest";
import server from "../src/server";

describe("ping pong test", () => {
  test("returns PONG", async () => {
    const res = await request(server).get("/ping").expect(200);

    expect(res.body).toMatchObject({ message: "pong" });
  });
});
