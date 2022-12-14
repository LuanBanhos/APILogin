"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
var pessoa_model_1 = require("../models/pessoa-model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = require("jsonwebtoken");
var PessoaController = /** @class */ (function () {
    function PessoaController() {
    }
    PessoaController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pessoa, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, pessoa_model_1.PessoaModel.create(req.body)];
                    case 1:
                        pessoa = _a.sent();
                        return [2 /*return*/, res.status(200).json(pessoa)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ msg: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PessoaController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pessoa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pessoa_model_1.PessoaModel.find()];
                    case 1:
                        pessoa = _a.sent();
                        return [2 /*return*/, res.status(200).json(pessoa)];
                }
            });
        });
    };
    PessoaController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, pessoa, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, pessoa_model_1.PessoaModel.findById(id)];
                    case 1:
                        pessoa = _a.sent();
                        if (!pessoa) {
                            return [2 /*return*/, res.status(404).json({ msg: "Pessoa N??o Encontrada" })];
                        }
                        return [2 /*return*/, res.status(200).json(pessoa)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ msg: "Verificar o id da pessoa" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PessoaController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, pessoa, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, pessoa_model_1.PessoaModel.findById(id)];
                    case 2:
                        pessoa = _a.sent();
                        if (!pessoa) {
                            return [2 /*return*/, res.status(404).json({ msg: "Pessoa N??o Encontrada" })];
                        }
                        return [4 /*yield*/, pessoa_model_1.PessoaModel.findByIdAndUpdate(id, req.body)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res
                                .status(200)
                                .json({ msg: "Atualiza????o de pessoa feita com sucesso" })];
                    case 4:
                        error_3 = _a.sent();
                        return [2 /*return*/, res
                                .status(404)
                                .json({ msg: "Falha ao atualizar os dados da pessoa" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PessoaController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, pessoa, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, pessoa_model_1.PessoaModel.findByIdAndDelete(id)];
                    case 1:
                        pessoa = _a.sent();
                        if (!pessoa) {
                            return [2 /*return*/, res.status(404).json({ msg: "Pessoa n??o existe" })];
                        }
                        return [2 /*return*/, res.status(200).json({ msg: "Pessoa deletada com sucesso" })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ msg: "Falha ao deletar pessoa" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PessoaController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, pessoa, checkPassowrd, scret, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        if (!email) {
                            return [2 /*return*/, res.status(422).json({ msg: 'Email Obrigatorio!' })];
                        }
                        if (!password) {
                            return [2 /*return*/, res.status(422).json({ msg: 'Senha Obrigatorio!' })];
                        }
                        return [4 /*yield*/, pessoa_model_1.PessoaModel.findOne({ email: email })];
                    case 1:
                        pessoa = _b.sent();
                        if (!pessoa) {
                            return [2 /*return*/, res.status(404).json({ msg: 'Email N??o Encontrado' })];
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(password, pessoa.password)];
                    case 2:
                        checkPassowrd = _b.sent();
                        if (!checkPassowrd) {
                            return [2 /*return*/, res.status(422).json({ msg: "Senha Incorreta!" })];
                        }
                        try {
                            scret = process.env.JWT_SCRET;
                            token = (0, jsonwebtoken_1.sign)({}, 'scret', pessoa.id);
                            res.status(200).json({ msg: 'Usuario logaado', token: token });
                        }
                        catch (error) {
                            res.status(500).json({ msg: "Erro No servidor, tente mais tarde!" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return PessoaController;
}());
exports.PessoaController = PessoaController;
