import { app } from "./app";
import { Loaders } from "./service";

const loaders = new Loaders();
loaders.start();

const port = 3000;
const runningMessage = `⚡️ [server]: Server running at http://localhost:${port}`;
app.listen(port, () => console.log(runningMessage));


export {Loaders};