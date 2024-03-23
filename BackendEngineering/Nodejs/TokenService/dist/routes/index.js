"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TokenController_1 = require("../controllers/TokenController");
const router = express_1.default.Router();
router.get('/', TokenController_1.TokenController.generateToken);
exports.default = router;
