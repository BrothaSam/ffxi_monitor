declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
  }
}
