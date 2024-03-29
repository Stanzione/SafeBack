import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import "reflect-metadata";
import {router} from "./services/routes";

const app = express();

import "./database"

app.use(express.json());

app.use(router);

app.use( (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({error : err.message})
    }

    return response.status(500).json({
        status: "error",
        message: "internal Server error"
    })
});

app.listen(3333, () => console.log('Server funfa'));


