import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { useExpressServer, getMetadataArgsStorage } from "routing-controllers";
import { defaultMetadataStorage } from "class-transformer/cjs/storage";

import { AuthController } from "./controllers/auth.controller";
import { UsersController } from "./controllers/users.controller";
import { WorkController } from "./controllers/work.controller";
import { config } from "./config";
import { currentUserChecker } from "./utils/currentUserValidator";

const app = express();

app.use(cookieParser());

useExpressServer(app, {
  controllers: [AuthController, UsersController, WorkController],
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
  currentUserChecker,
});

const routingControllersOptions = {
  controllers: [AuthController, UsersController, WorkController],
};

const schemas = validationMetadatasToSchemas({
  classTransformerMetadataStorage: defaultMetadataStorage,
  refPointerPrefix: "#/components/schemas/",
});

const spec = routingControllersToSpec(
  getMetadataArgsStorage(),
  routingControllersOptions,
  {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
    components: {
      schemas,
    },
  }
);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(spec));
app.use("/api-docs", (_req, res) => res.json(spec));

app.listen(config.port);