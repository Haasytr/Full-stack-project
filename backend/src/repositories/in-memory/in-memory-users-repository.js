"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUsersRepository = void 0;
const crypto_1 = require("crypto");
class InMemoryUsersRepository {
    constructor() {
        this.items = [];
    }
    async findMany(query) {
        return this.items.filter((item) => Object.values(item).some((value) => typeof value === 'string' &&
            String(value).toLowerCase().includes(String(query).toLowerCase())));
    }
    async createMany(data) {
        data.forEach((user) => {
            const formmatedUser = {
                id: String((0, crypto_1.randomUUID)()),
                name: user.name,
                country: user.country,
                favorite_sport: user.favorite_sport,
                city: user.city,
                created_at: new Date(),
            };
            this.items.push(formmatedUser);
        });
        return this.items;
    }
}
exports.InMemoryUsersRepository = InMemoryUsersRepository;
