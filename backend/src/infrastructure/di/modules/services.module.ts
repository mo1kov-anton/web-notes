import { container } from "tsyringe";
import { TOKENS } from "../tokens.js";
import { BcryptHashService } from "@/infrastructure/services/security/hash.service.js";

export function servicesModule() {
  container.registerSingleton(
    TOKENS.Services.Security.HashService,
    BcryptHashService,
  );
}
