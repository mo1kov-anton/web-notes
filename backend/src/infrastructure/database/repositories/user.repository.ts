import { inject, injectable } from "tsyringe";
import type { UserRepository } from "@/domain/user/user.repository.js";
import { TOKENS } from "@/infrastructure/di/tokens.js";
import type { PrismaClient } from "../generated/client.js";
import { User } from "@/domain/user/user.entity.js";

@injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    @inject(TOKENS.Database.Prisma) private readonly prisma: PrismaClient,
  ) {}

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const record = await this.prisma.user.findUnique({ where: { email } });

    return record
      ? User.restore(
          record.id,
          record.username,
          record.email,
          record.passwordHash,
          record.createdAt,
          record.updatedAt,
        )
      : null;
  }

  async deleteByEmail(email: string): Promise<void> {
    await this.prisma.user.delete({ where: { email } });
  }
}
