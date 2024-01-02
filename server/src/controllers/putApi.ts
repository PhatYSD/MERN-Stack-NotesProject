import { Request, Response } from "express";

import Notes from "../models/Notes";

const putApi = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id)
        res.status(404).send({ message: "Please enter id on paramiter." });
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.author
    )
        res.status(404).send({ message: "Not Found title, description, author." });

    try {
        const result = await Notes.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        });

        if (!result)
            res.status(404).send({ message: "Not Found data on database." });

        res.status(200).json({
            message: "Successfully to updata note on database.",
        });
    } catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
}

export default putApi;