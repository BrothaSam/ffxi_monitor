import osu from "node-os-utils";
import { CpuUsage } from "../entities/CpuUsage";
import { MemoryUsage } from "../entities/MemoryUsage";

export async function getMemoryUsage() {
  let memory: MemoryUsage = await osu.mem
    .info()
    .then((info) => {
      return { ...info };
    })
    .catch((err) => {
      throw new Error(err);
    });

  return memory;
}

export async function getCpuUsage() {
  let cpu: CpuUsage = await osu.cpu
    .usage()
    .then((info) => {
      return { usage: info };
    })
    .catch((err) => {
      throw new Error(err);
    });

  return cpu;
}
