"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(users) {
        const createdUsers = await this.usersRepository.createMany(users);
        return {
            createdUsers,
        };
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
