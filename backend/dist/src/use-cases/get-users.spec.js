"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_users_repository_1 = require("@/repositories/in-memory/in-memory-users-repository");
const find_users_1 = require("./find-users");
let usersRepository;
let sut;
(0, vitest_1.describe)('Get users use case', () => {
    (0, vitest_1.beforeEach)(() => {
        usersRepository = new in_memory_users_repository_1.InMemoryUsersRepository();
        sut = new find_users_1.GetUsersUseCase(usersRepository);
    });
    (0, vitest_1.it)('should be able to create a user', async () => {
        usersRepository.createMany([
            {
                name: 'JonhDoe2',
                city: 'Rio de janeiro',
                country: 'Brazil',
                favorite_sport: 'Volley',
            },
            {
                name: 'JonhDoe',
                city: 'São Paulo',
                country: 'Brazil',
                favorite_sport: 'Volley',
            },
        ]);
        const { users } = await sut.execute({
            q: 'Volley',
        });
        (0, vitest_1.expect)(users).toHaveLength(2);
        (0, vitest_1.expect)(users).toEqual([
            vitest_1.expect.objectContaining({ favorite_sport: 'Volley' }),
            vitest_1.expect.objectContaining({ favorite_sport: 'Volley' }),
        ]);
    });
});
