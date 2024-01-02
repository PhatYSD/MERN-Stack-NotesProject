"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = exports.getsApi = void 0;
const Notes_1 = __importDefault(require("../models/Notes"));
const getsApi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datas = yield Notes_1.default.find({});
        if (!datas)
            res.status(404).send({ message: "Not Found data on database." });
        res.status(200).json({
            message: "Successfully to find data on database.",
            count: datas.length,
            data: datas
        });
    }
    catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
});
exports.getsApi = getsApi;
const getApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(404).send({ message: "Please enter id on paramiter." });
    try {
        const data = yield Notes_1.default.findById(id);
        if (!data)
            res.status(404).send({ message: "Not Found data on database." });
        res.status(200).json({
            message: "Successfully to find data on database",
            data
        });
    }
    catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
});
exports.getApi = getApi;
//# sourceMappingURL=getApi.js.map