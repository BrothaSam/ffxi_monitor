/* import express from "express";
import next from "next";
import * as osu from "../utils/os-utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server
    .listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    })
    .on("error", (err: Error) => {
      throw err;
    });

  getTelemetry();

  setInterval(function () {
    getTelemetry();
  }, 5 * 60 * 1000);
});

function getTelemetry() {
  let time: number = Date.now();
  osu.getCpu().then(async (cpu) => {
    console.log("Writing CPU metrics.");
    await prisma.cpuUsage.create({ data: { time, ...cpu } }).catch((err) => {
      throw err;
    });
  });
  osu.getMemory().then(async (mem) => {
    console.log("Writing Memory metrics.");
    await prisma.memoryUsage.create({ data: { time, ...mem } }).catch((err) => {
      throw err;
    });
  });
}
 */