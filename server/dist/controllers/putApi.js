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
const Notes_1 = __importDefault(require("../models/Notes"));
const putApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(404).send({ message: "Please enter id on paramiter." });
    if (!req.body.title ||
        !req.body.description ||
        !req.body.author)
        res.status(404).send({ message: "Not Found title, description, author." });
    try {
        const result = yield Notes_1.default.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        });
        if (!result)
            res.status(404).send({ message: "Not Found data on database." });
        res.status(200).json({
            message: "Successfully to updata note on database.",
        });
    }
    catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
});
exports.default = putApi;
//# sourceMappingURL=putApi.js.map