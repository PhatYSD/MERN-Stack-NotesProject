import express from "express";
import morgan from "morgan";
import cors from "cors";

import routerAPI from "./routers/routerAPI";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type"]
}));

app.use("/api", routerAPI);

export default app;