import mongoose from "mongoose";

import Env from "./Env";

const Db = (listen: Function) => {
    const { DATABASE_URI } = Env;
    mongoose
        .connect(DATABASE_URI)
        .then(() => {
            console.log(`Successfully to cennect database...`);

            listen();
        })
};

export default Db;