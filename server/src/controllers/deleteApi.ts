import { Request, Response } from "express";

import Notes from "../models/Notes";

const deleteApi = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id)
        res.status(404).send({ message: "Please enter id on paramiter." });

    try {
        const result = await Notes.findByIdAndDelete(id);

        if (!result)
            res.status(404).send({ message: "Not Found data on database." });

    res.sendStatus(204);
    } catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
}

export default deleteApi;