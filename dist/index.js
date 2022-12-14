"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loaders = void 0;
var app_1 = require("./app");
var service_1 = require("./service");
Object.defineProperty(exports, "Loaders", { enumerable: true, get: function () { return service_1.Loaders; } });
var loaders = new service_1.Loaders();
loaders.start();
var port = 3000;
var runningMessage = "\u26A1\uFE0F [server]: Server running at http://localhost:".concat(port);
app_1.app.listen(port, function () { return console.log(runningMessage); });
