"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cardRoute_1 = __importDefault(require("./routes/cardRoute"));
const notFoundRoute_1 = __importDefault(require("./middlewares/notFoundRoute"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// Middlewere
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", cardRoute_1.default);
app.get("/", (req, res) => {
    res.send("Server Is Running.......");
});
// not found route
app.use("*", notFoundRoute_1.default);
// global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
