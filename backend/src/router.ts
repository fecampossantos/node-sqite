import { Router } from "express";
import todoController from "./controllers/todo";

const router = Router();

/** PING PONG */
router.route("/ping").get(async (req, res, next) => {
  res.status(200).json({ message: "pong" });
});

router.route("/todo").get(todoController.list).post(todoController.create);

router
  .route("/todo/:id")
  .get(todoController.find)
  .delete(todoController.destroy);

router.route("/todo/check/:id").patch(todoController.check);

router.route("/todo/uncheck/:id").patch(todoController.uncheck);

export default router;
