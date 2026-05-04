import { config } from "@config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client.js";

const connectionString = config.dbUrl;

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({ adapter });
