import dotenv from "dotenv";
import path from "path";

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path.join(__dirname, `../.env.${env}`) });