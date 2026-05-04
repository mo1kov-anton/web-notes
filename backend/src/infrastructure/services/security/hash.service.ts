import bcrypt from "bcrypt";
import { injectable } from "tsyringe";
import type { HashService } from "@/application/services/security/hash.service.js";

@injectable()
export class BcryptHashService implements HashService {
  private readonly SALT = 12;

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT);
  }

  async compare(password: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
  }
}
