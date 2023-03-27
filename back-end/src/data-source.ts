import { DataSource, DataSourceOptions } from "typeorm";
import Client from "./entities/client.entity";
import Contact from "./entities/contacts.entity";
import "dotenv/config";
import "reflect-metadata";

const port = process.env.DB_PORT as number | undefined;

const setDataSourceOptions = (): DataSourceOptions => {
  
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );
  
  const nodeEnv = process.env.NODE_ENV;
  
    if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
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
    migrations: [],
  };
};

const dataSourceOptions = setDataSourceOptions();
export const AppDataSource = new DataSource(dataSourceOptions);
