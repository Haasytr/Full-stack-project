"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const create_1 = require("./create");
const fastify_multipart_1 = __importDefault(require("fastify-multipart"));
const search_1 = require("./search");
async function UsersRoutes(app) {
    app.register(fastify_multipart_1.default);
    app.post('/files', create_1.create);
    app.get('/users', search_1.search);
}
exports.UsersRoutes = UsersRoutes;
