import express from "express";
import "reflect-metadata";
import {router} from "./services/routes";

const app = express();

import "./database"

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log('Server funfa'));


