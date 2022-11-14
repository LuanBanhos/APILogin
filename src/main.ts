import { app } from "./app/app";
import { Loaders } from "./database/loaders";
import * as dotenv from "dotenv";

const loaders = new Loaders();
loaders.start();
dotenv.config();

const port = 3000;
const runningMessage = `⚡️ [server]: Server running at http://localhost:${port}`;

app.listen(port, () => console.log(runningMessage));
