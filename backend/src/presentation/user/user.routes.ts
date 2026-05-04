import { Hono } from "hono";
import { container } from "tsyringe";
import type { UserController } from "./user.controller.js";
import { TOKENS } from "@/infrastructure/di/tokens.js";

export function createUserRoutes() {
  const userRoutes = new Hono();

  const userController = container.resolve<UserController>(
    TOKENS.User.Controller,
  );

  userRoutes.post("/register", (c) => userController.register(c));

  return userRoutes;
}
