import express, { Request, Response } from "express";

import postApi from "../controllers/postApi";
import { getApi, getsApi } from "../controllers/getApi";
import putApi from "../controllers/putApi";
import deleteApi from "../controllers/deleteApi";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.status(200);
    res.send({ message: "Welcome to MERN Stack notesproject API." });
});

router.get("/notes", getsApi);
router.get("/notes/:id", getApi);
router.post("/notes", postApi);
router.put("/notes/:id", putApi);
router.delete("/notes/:id", deleteApi);

export default router;