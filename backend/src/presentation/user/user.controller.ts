import { inject, injectable } from "tsyringe";
import { TOKENS } from "@/infrastructure/di/tokens.js";
import type { RegisterUserUseCase } from "@/application/user/use-cases/register-user.use-case.js";
import type { Context } from "hono";
import { registerSchema } from "./schemas/register-user.schema.js";

@injectable()
export class UserController {
  constructor(
    @inject(TOKENS.User.RegisterUseCase)
    private readonly registerUserUseCase: RegisterUserUseCase,
  ) {}

  async register(c: Context) {
    const body = await c.req.json();

    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return c.json({ message: "Incorrect data" }, 400);
    }

    await this.registerUserUseCase.execute(parsed.data);

    return c.json({ message: "Account created" }, 201);
  }
}
