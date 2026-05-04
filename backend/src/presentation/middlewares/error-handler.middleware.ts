import type { Context } from "hono";
import { AppError } from "@/domain/errors/app-error.js";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { logger } from "@logger";

export async function errorHandler(err: Error, c: Context) {
  if (err instanceof AppError) {
    return c.json(
      {
        message: err.message,
      },
      err.statusCode as ContentfulStatusCode,
    );
  }

  logger.error(err, "Unexpected error:");

  return c.json(
    {
      message: "Something went wrong.",
    },
    500,
  );
}
