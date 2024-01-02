import { Request, Response } from "express";

import Notes from "../models/Notes";

const getsApi = async (_req: Request, res: Response) => {
    try {
        const datas = await Notes.find({});

        if (!datas)
            res.status(404).send({ message: "Not Found data on database." });

        res.status(200).json({
            message: "Successfully to find data on database.",
            count: datas.length,
            data: datas
        });
    } catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
}

const getApi = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id)
        res.status(404).send({ message: "Please enter id on paramiter." });

    try {
        const data = await Notes.findById(id);

        if (!data)
            res.status(404).send({ message: "Not Found data on database." });

        res.status(200).json({
            message: "Successfully to find data on database",
            data
        });
    } catch (error) {
        console.log(`Error: ${error instanceof Error ? error.message : error}`);
        res.status(500).send({ message: error instanceof Error ? error.message : error });
    }
}

export { getsApi, getApi };