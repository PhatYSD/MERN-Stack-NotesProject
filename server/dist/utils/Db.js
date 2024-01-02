"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Env_1 = __importDefault(require("./Env"));
const Db = (listen) => {
    const { DATABASE_URI } = Env_1.default;
    mongoose_1.default
        .connect(DATABASE_URI)
        .then(() => {
        console.log(`Successfully to cennect database...`);
        listen();
    });
};
exports.default = Db;
//# sourceMappingURL=Db.js.map