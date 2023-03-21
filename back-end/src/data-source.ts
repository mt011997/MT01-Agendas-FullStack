import { DataSource, DataSourceOptions } from "typeorm";
import Client from "./entities/client.entity";
import Contact from "./entities/contacts.entity";
import "dotenv/config";
import "reflect-metadata";
import { CreateUsers1679355148065 } from "./migrations/1679355148065-CreateUsers";

const port = process.env.DB_PORT as number | undefined;

const setDataSourceOptions = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [Client, Contact],
      migrations: [CreateUsers1679355148065],
    };
  }
  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [Client, Contact],
    };
  }
  return {
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
    logging: true,
    synchronize: false,
    entities: [Client, Contact],
    migrations: [CreateUsers1679355148065],
  };
};
const dataSourceOptions = setDataSourceOptions();
export const AppDataSource = new DataSource(dataSourceOptions);
