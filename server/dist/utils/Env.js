"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const Env = (0, envalid_1.cleanEnv)(process.env, {
    APP_HOST: (0, envalid_1.str)(),
    APP_PORT: (0, envalid_1.num)(),
    DATABASE_URI: (0, envalid_1.str)()
});
exports.default = Env;
//# sourceMappingURL=Env.js.map