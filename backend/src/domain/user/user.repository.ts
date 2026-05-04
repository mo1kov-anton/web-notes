import type { User } from "./user.entity.js";

export interface UserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  deleteByEmail(email: string): Promise<void>;
}
