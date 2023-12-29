"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetUserUseCase = void 0;
const prisma_users_repository_1 = require("@/repositories/prisma/prisma-users.repository");
const find_users_1 = require("../find-users");
function makeGetUserUseCase() {
    const usersRepository = new prisma_users_repository_1.PrismaUsersRepository();
    const getUserUseCase = new find_users_1.GetUsersUseCase(usersRepository);
    return getUserUseCase;
}
exports.makeGetUserUseCase = makeGetUserUseCase;
