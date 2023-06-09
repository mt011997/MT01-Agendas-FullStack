"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
(async () => {
    await data_source_1.AppDataSource.initialize().catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
    const PORT = process.env.PORT || 3000;
    app_1.default.listen(PORT, () => {
        console.log(`app is running on http://localhost:${PORT}}`);
    });
})();
