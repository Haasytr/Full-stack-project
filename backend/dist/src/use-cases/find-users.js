"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersUseCase = void 0;
class GetUsersUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ q, }) {
        const users = await this.usersRepository.findMany(q);
        return {
            users,
        };
    }
}
exports.GetUsersUseCase = GetUsersUseCase;
