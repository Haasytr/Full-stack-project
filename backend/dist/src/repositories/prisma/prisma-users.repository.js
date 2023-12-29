"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUsersRepository = void 0;
const prisma_1 = require("@/lib/prisma");
class PrismaUsersRepository {
    findMany(query) {
        const users = prisma_1.prisma.user.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { city: { contains: query } },
                    { country: { contains: query } },
                    { favorite_sport: { contains: query } },
                ],
            },
        });
        return users;
    }
    async createMany(data) {
        const createdUsers = [];
        for (const user of data) {
            const createdUser = await prisma_1.prisma.user.create({
                data: user,
            });
            createdUsers.push(createdUser);
        }
        return createdUsers;
    }
}
exports.PrismaUsersRepository = PrismaUsersRepository;
