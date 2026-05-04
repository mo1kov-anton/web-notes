import z from "zod";

export const configSchema = z.object({
  PORT: z.coerce
    .number("PORT must be an integer")
    .min(1000, "PORT must be at least 1000")
    .max(65535, "PORT must be at most 65535"),
  DATABASE_URL: z
    .string()
    .min(1, "DATABASE_URL is required")
    .regex(/^postgresql:\/\/.+/, "DATABASE_URL must start with postgresql://"),
  JWT_ACCESS_SECRET: z
    .string()
    .min(32, "JWT_ACCESS_SECRET must be at least 32 characters"),
});
