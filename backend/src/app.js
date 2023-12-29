"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_1 = require("./http/controllers/users/routes");
exports.app = (0, fastify_1.default)();
exports.app.register(cors_1.default, {});
exports.app.register(routes_1.UsersRoutes);
