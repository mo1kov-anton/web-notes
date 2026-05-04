import { Hono } from "hono";
import { logger as honoLogger } from "hono/logger";
import { errorHandler } from "./presentation/middlewares/error-handler.middleware.js";
import { createRouter } from "./presentation/router.js";

export const createApp = () => {
  const app = new Hono();

  app.use("*", honoLogger());

  app.onError(errorHandler);

  app.route("/api", createRouter());

  return app;
};
