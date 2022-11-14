"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loaders = void 0;
var mongodb_1 = require("./mongodb");
var Loaders = /** @class */ (function () {
    function Loaders() {
    }
    Loaders.prototype.start = function () {
        (0, mongodb_1.startDB)();
    };
    return Loaders;
}());
exports.Loaders = Loaders;
