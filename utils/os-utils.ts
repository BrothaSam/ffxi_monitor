import { MemInfo } from "node-os-utils";
import { CpuInfo } from "os";

var osu = require("node-os-utils");

interface Memory {
  totalMemMb: number;
  usedMemMb: number;
  freeMemMb: number;
  freeMemPercentage: number;
}

interface Cpu {
  usage: number;
}

export async function getMemory() {
  let memory: Memory = await osu.mem
    .info()
    .then((info: MemInfo) => {
      /*  memory.totalMemMb = info.totalMemMb;
      memory.usedMemMb = info.usedMemMb;
      memory.freeMemMb = info.freeMemMb;
      memory.freeMemPercentage = info.freeMemPercentage; */
      return { ...info };
    })
    .catch((err: Error) => console.error(err));

  return memory;
}

export async function getCpu() {
  let cpu: Cpu = await osu.cpu
    .usage()
    .then((info: CpuInfo) => {
      return { usage: info };
    })
    .catch((err: Error) => console.error(err));

  return cpu;
}
