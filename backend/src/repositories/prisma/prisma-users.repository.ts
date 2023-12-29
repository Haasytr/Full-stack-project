import { prisma } from '@/lib/prisma'
import { UsersRepository } from '@/repositories/users-repository'
import { Prisma, User } from 'prisma/generated/client'

export class PrismaUsersRepository implements UsersRepository {
  findMany(query: string) {
    const users = prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { city: { contains: query } },
          { country: { contains: query } },
          { favorite_sport: { contains: query } },
        ],
      },
    })

    return users
  }

  async createMany(data: Prisma.UserCreateInput[]) {
    const createdUsers: User[] = []

    for (const user of data) {
      const createdUser = await prisma.user.create({
        data: user,
      })
      createdUsers.push(createdUser)
    }

    return createdUsers
  }
}
