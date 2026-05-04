import { AppError } from "../../errors/app-error.js";

export class EmailAlreadyExistsError extends AppError {
  constructor() {
    super("User with this email already exists", 409);
  }
}
