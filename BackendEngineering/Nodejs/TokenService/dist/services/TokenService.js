"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class TokenService {
    static verify(token) {
        return new Promise((resolve, rejcet) => {
            jsonwebtoken_1.default.verify(token, _a.jwt_secret, (error, decoded) => {
                if (error) {
                    rejcet(error);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
    static sign(payload) {
        return new Promise((resolve, reject) => {
            try {
                resolve(jsonwebtoken_1.default.sign(payload, _a.jwt_secret));
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.TokenService = TokenService;
_a = TokenService;
TokenService.jwt_secret = process.env.JWT_SECRET;
TokenService.initialize = () => {
    console.log('Token service initialized');
    if (!_a.jwt_secret) {
        throw new Error('JWT secret not found in environment variables!');
    }
    _a.jwt_secret = process.env.JWT_SECRET;
};
