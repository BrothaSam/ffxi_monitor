import { MikroORM } from "@mikro-orm/core";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function mikroOrmInit(
  fastify: FastifyInstance,
  options: {
    config: Parameters<typeof MikroORM.init>[0];
    up: boolean;
  }
) {
  const orm = await MikroORM.init({
    ...options.config,
    logger: (message: string) => fastify.log.info(message),
  });

  if (options.up) {
    await orm.getMigrator().up();
  }

  fastify.decorate("orm", orm).addHook("onClose", async (instance, done) => {
    await instance.orm.close();
    done;
  });
}

export default fp(mikroOrmInit, {
  fastify: ">= 3.9.2",
  name: "fastify-mikroorm",
});
