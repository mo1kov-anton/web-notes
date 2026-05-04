import "dotenv/config";
import { configSchema } from "./config.schema.js";
import { logger } from "@logger";

const parsed = configSchema.safeParse(process.env);

if (!parsed.success) {
  logger.error("Invalid env variables.");

  for (const issue of parsed.error.issues) {
    logger.error(issue.message);
  }

  process.exit(1);
}

export const config = {
  port: parsed.data.PORT,
  dbUrl: parsed.data.DATABASE_URL,
  jwtSecret: parsed.data.JWT_ACCESS_SECRET,
};
