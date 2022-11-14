import { app } from "./app/app";
import { Loaders } from "./database/loaders";

const loaders = new Loaders();
loaders.start();

const port = 3000;
const runningMessage = `⚡️ [server]: Server running at http://localhost:${port}`;

app.listen(port, () => console.log(runningMessage));
