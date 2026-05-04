import "reflect-metadata";
import { buildContainer } from "./infrastructure/di/container.js";
import { createApp } from "./app.js";
import { serve } from "@hono/node-server";
import { config } from "@config";
import { logger } from "@logger";

buildContainer();

const app = createApp();

const server = serve(
  {
    fetch: app.fetch,
    port: config.port,
  },
  (info) => {
    logger.info(`http://localhost:${info.port}`);
  },
);

const shutdown = () => {
  server.close(() => {
    logger.info("Server stopped");
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
