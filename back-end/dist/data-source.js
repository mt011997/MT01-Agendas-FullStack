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
const _1679776848159_InitialMigrate_1 = require("./migrations/1679776848159-InitialMigrate");
const port = process.env.DB_PORT;
const setDataSourceOptions = () => {
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [client_entity_1.default, contacts_entity_1.default],
            migrations: [_1679776848159_InitialMigrate_1.InitialMigrate1679776848159],
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
        migrations: [_1679776848159_InitialMigrate_1.InitialMigrate1679776848159],
    };
};
const dataSourceOptions = setDataSourceOptions();
exports.AppDataSource = new typeorm_1.DataSource(dataSourceOptions);
