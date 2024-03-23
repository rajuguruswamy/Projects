"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const TokenService_1 = require("./services/TokenService");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Initialize TokenService
TokenService_1.TokenService.initialize();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//  Routes
app.use('/', routes_1.default);
//  listern port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
