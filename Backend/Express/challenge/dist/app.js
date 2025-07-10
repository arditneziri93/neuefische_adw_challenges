"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const port = 3000;
const app = (0, express_1.default)();
nunjucks_1.default.configure("src/templates", {
    autoescape: true,
    express: app,
});
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
