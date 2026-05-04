import { Hono } from "hono";
import { createUserRoutes } from "./user/user.routes.js";

export function createRouter() {
  const router = new Hono();

  router.route("/user", createUserRoutes());

  return router;
}
