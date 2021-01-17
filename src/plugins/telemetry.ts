import { FastifyInstance } from "fastify";
import { CpuUsage } from "../entities/CpuUsage";
import { MemoryUsage } from "../entities/MemoryUsage";
import * as osu from "../utils/os-utils";
import fp from "fastify-plugin";

async function getTelemetry(
  fastify: FastifyInstance,
  options: { timeout: number }
) {
  const cpuUsage = fastify.orm.em.create(CpuUsage, await osu.getCpuUsage());

  fastify.log.info("Writing CPU usage to database...");
  await fastify.orm.em.persistAndFlush(cpuUsage);

  const memoryUsage = fastify.orm.em.create(
    MemoryUsage,
    await osu.getMemoryUsage()
  );

  fastify.log.info("Writing memory usage to database...");
  await fastify.orm.em.persistAndFlush(memoryUsage);

  setTimeout(() => getTelemetry(fastify, options), options.timeout);
}

export default fp(getTelemetry, {
  fastify: ">= 3.9.2",
  name: "ffxi-telemetry",
});
