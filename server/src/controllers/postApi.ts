import { Request, Response } from "express";

import Notes from "../models/Notes";

const postApi = async (req: Request, res: Response) => {
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.author
    ) res.status(404).send({ message: "Not Found title, description, author." });

    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        };

        const result = await Notes.create(data);

        if (!result) res.status(500).send({ message: "Can't create a new note. Again please." });

        res.status(201).json({
            message: "Successfully to create note.",
            data
        });
    } catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
};

export default postApi;