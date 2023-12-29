"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_users_repository_1 = require("@/repositories/in-memory/in-memory-users-repository");
const create_users_1 = require("./create-users");
let usersRepository;
let sut;
(0, vitest_1.describe)('Create users use case', () => {
    (0, vitest_1.beforeEach)(() => {
        usersRepository = new in_memory_users_repository_1.InMemoryUsersRepository();
        sut = new create_users_1.CreateUserUseCase(usersRepository);
    });
    (0, vitest_1.it)('should be able to create users', async () => {
        const { createdUsers } = await sut.execute([
            {
                name: 'John Doe',
                country: 'USA',
                city: 'New York',
                favorite_sport: 'Basketball',
            },
            {
                name: 'John Doe',
                country: 'USA',
                city: 'New York',
                favorite_sport: 'Basketball',
            },
        ]);
        (0, vitest_1.expect)(createdUsers).toHaveLength(2);
        (0, vitest_1.expect)(createdUsers).toEqual([
            vitest_1.expect.objectContaining({ city: 'New York' }),
            vitest_1.expect.objectContaining({ favorite_sport: 'Basketball' }),
        ]);
    });
});
