import "./config/loadEnv";
import { __prod__ } from "./constants";
import Fastify from "fastify";
import { DEV_LOGGER, PROD_LOGGER } from "./config/config";
import mikroOrmConfig from "./config/mikro-orm.config";
import mikroOrmPlugin from "./plugins/mikro-orm";
import mercurius from "mercurius";
import { CpuUsageResolver } from "./resolvers/CpuUsageResolver";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { buildTypeDefsAndResolvers } from "type-graphql";
import telemetryPlugin from "./plugins/telemetry";

const logger = __prod__ ? PROD_LOGGER : DEV_LOGGER;

const fastify = Fastify({ logger });

const start = async () => {
  try {
    //Mikro-Orm
    await fastify.register(mikroOrmPlugin, {
      config: mikroOrmConfig,
      up: true,
    });

    //Telemetry
    await fastify.register(telemetryPlugin, { timeout: 5 * 60 * 1000 });

    //Mercurius
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
      resolvers: [CpuUsageResolver],
    });

    fastify.register(mercurius, {
      schema: makeExecutableSchema({ typeDefs, resolvers }),
      graphiql: "playground",
      context: () => ({ em: fastify.orm.em }),
    });

    process.on("unhandledRejection", (err) => {
      fastify.log.error(`Unhandled Rejection. Exiting application... ${err}`);
      process.exit(1);
    });

    await fastify.listen(4000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start().catch((err) => console.error(err));
