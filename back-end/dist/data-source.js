"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = __importDefault(require("./entities/client.entity"));
const contacts_entity_1 = __importDefault(require("./entities/contacts.entity"));
require("dotenv/config");
require("reflect-metadata");
const _1679874754259_CreateMigrate_1 = require("./migrations/1679874754259-CreateMigrate");
const path_1 = __importDefault(require("path"));
const port = process.env.DB_PORT;
const setDataSourceOptions = () => {
    const entitiesPath = path_1.default.join(__dirname, "./entities/**.{js,ts}");
    const migrationsPath = path_1.default.join(__dirname, "./migrations/**.{js,ts}");
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
            entities: [client_entity_1.default, contacts_entity_1.default],
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
        entities: [client_entity_1.default, contacts_entity_1.default],
        migrations: [_1679874754259_CreateMigrate_1.CreateMigrate1679874754259],
    };
};
const dataSourceOptions = setDataSourceOptions();
exports.AppDataSource = new typeorm_1.DataSource(dataSourceOptions);
