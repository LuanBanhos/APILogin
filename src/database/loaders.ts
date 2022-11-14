import { startDB } from "./mongodb";

export class Loaders {
  start() {
    startDB();
  }
}
