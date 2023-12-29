import { randomUUID } from 'crypto'
import { UsersRepository } from '../users-repository'
import { Prisma, User } from 'prisma/generated/client'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findMany(query: string) {
    return this.items.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          String(value).toLowerCase().includes(String(query).toLowerCase()),
      ),
    )
  }

  async createMany(data: Prisma.UserCreateInput[]) {
    data.forEach((user) => {
      const formmatedUser = {
        id: String(randomUUID()),
        name: user.name,
        country: user.country,
        favorite_sport: user.favorite_sport,
        city: user.city,
        created_at: new Date(),
      }

      this.items.push(formmatedUser)
    })

    return this.items
  }
}
