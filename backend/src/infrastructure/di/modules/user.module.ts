import { container } from "tsyringe";
import { TOKENS } from "../tokens.js";
import { UserController } from "@/presentation/user/user.controller.js";
import { RegisterUserUseCase } from "@/application/user/use-cases/register-user.use-case.js";

export function userModule() {
  container.registerSingleton(TOKENS.User.Controller, UserController);
  container.registerSingleton(TOKENS.User.RegisterUseCase, RegisterUserUseCase);
}
