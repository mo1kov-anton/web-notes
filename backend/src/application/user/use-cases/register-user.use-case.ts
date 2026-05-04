import { inject, injectable } from "tsyringe";
import { TOKENS } from "@/infrastructure/di/tokens.js";
import type { UserRepository } from "@/domain/user/user.repository.js";
import type { HashService } from "@/application/services/security/hash.service.js";
import type { RegisterUserDto } from "../dto/register-user.dto.js";
import { EmailAlreadyExistsError } from "@/domain/user/errors/email-already-exists.error.js";
import { User } from "@/domain/user/user.entity.js";

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject(TOKENS.Database.UserRepository)
    private readonly userRepository: UserRepository,
    @inject(TOKENS.Services.Security.HashService)
    private readonly hashService: HashService,
  ) {}

  async execute(input: RegisterUserDto): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(input.email);

    if (existingUser) {
      throw new EmailAlreadyExistsError();
    }

    const hashed = await this.hashService.hash(input.password);

    const user = User.create(input.username, input.email, hashed);

    await this.userRepository.save(user);
  }
}
