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
const postApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.title ||
        !req.body.description ||
        !req.body.author)
        res.status(404).send({ message: "Not Found title, description, author." });
    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        };
        const result = yield Notes_1.default.create(data);
        if (!result)
            res.status(500).send({ message: "Can't create a new note. Again please." });
        res.status(201).json({
            message: "Successfully to create note.",
            data
        });
    }
    catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
});
exports.default = postApi;
//# sourceMappingURL=postApi.js.map