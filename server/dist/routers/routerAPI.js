"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postApi_1 = __importDefault(require("../controllers/postApi"));
const getApi_1 = require("../controllers/getApi");
const putApi_1 = __importDefault(require("../controllers/putApi"));
const deleteApi_1 = __importDefault(require("../controllers/deleteApi"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.status(200);
    res.send({ message: "Welcome to MERN Stack notesproject API." });
});
router.get("/notes", getApi_1.getsApi);
router.get("/notes/:id", getApi_1.getApi);
router.post("/notes", postApi_1.default);
router.put("/notes/:id", putApi_1.default);
router.delete("/notes/:id", deleteApi_1.default);
exports.default = router;
//# sourceMappingURL=routerAPI.js.map