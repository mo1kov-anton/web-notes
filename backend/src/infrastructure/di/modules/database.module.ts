import { container } from "tsyringe";
import { TOKENS } from "../tokens.js";
import { prisma } from "@/infrastructure/database/prisma.js";
import { PrismaUserRepository } from "@/infrastructure/database/repositories/user.repository.js";

export function databaseModule() {
  container.registerInstance(TOKENS.Database.Prisma, prisma);
  container.registerSingleton(
    TOKENS.Database.UserRepository,
    PrismaUserRepository,
  );
}
