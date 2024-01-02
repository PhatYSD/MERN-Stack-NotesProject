"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const Env_1 = __importDefault(require("./utils/Env"));
const Db_1 = __importDefault(require("./utils/Db"));
const app_1 = __importDefault(require("./app"));
const server = (0, express_1.default)();
const { APP_HOST, APP_PORT } = Env_1.default;
server.use(app_1.default);
const listen = () => {
    server.listen(APP_PORT, APP_HOST, () => {
        console.log(`Server listenning on http://${APP_HOST}:${APP_PORT}/`);
    });
};
(0, Db_1.default)(listen);
//# sourceMappingURL=index.js.map