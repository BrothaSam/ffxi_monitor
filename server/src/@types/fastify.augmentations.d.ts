import fastify from "fastify";
import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";

declare module "fastify" {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse
  > {
    orm: MikroORM<IDatabaseDriver<Connection>>;
  }
}