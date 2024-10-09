import { Router } from "express";

const router = Router();

/** PING PONG */
router.route("/ping").get(async (req, res, next) => {
  res.status(200).json({ message: "pong" });
});

export default router;
