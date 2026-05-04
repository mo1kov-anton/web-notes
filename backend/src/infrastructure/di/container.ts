import { databaseModule } from "./modules/database.module.js";
import { servicesModule } from "./modules/services.module.js";
import { userModule } from "./modules/user.module.js";

export function buildContainer() {
  databaseModule();
  servicesModule();
  userModule();
}
