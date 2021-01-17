import path from "path";
import pino from "pino";

export const DEV_LOGGER = pino({ level: "info", prettyPrint: true });

export const PROD_LOGGER = pino(
  { level: "info" },
  pino.destination(path.join(__dirname, "../../server.log"))
);
