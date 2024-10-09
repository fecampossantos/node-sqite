import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import router from "./router";
import { HttpError } from "./error";

const server = express();

server.use(cors());

server.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

server.use(express.json({ limit: "100MB" }));
server.use(express.urlencoded({ extended: false }));

server.use("/", router);

server.use((req, res, next) => {
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(`Intercepted URL ${fullUrl} because of 404`);

  const error = new HttpError("Not Found", 404);

  next(error);
});

server.use(
  (error: HttpError, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (!error.httpCode) console.error(error);

    res.status(error.httpCode || 500).json({
      error: {
        message: error.message,
        stack: error.stack,
      },
    });
  }
);

export default server;
