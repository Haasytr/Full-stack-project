"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateUserUseCase = void 0;
const prisma_users_repository_1 = require("@/repositories/prisma/prisma-users.repository");
const create_users_1 = require("../create-users");
function makeCreateUserUseCase() {
    const usersRepository = new prisma_users_repository_1.PrismaUsersRepository();
    const createUserUseCase = new create_users_1.CreateUserUseCase(usersRepository);
    return createUserUseCase;
}
exports.makeCreateUserUseCase = makeCreateUserUseCase;
