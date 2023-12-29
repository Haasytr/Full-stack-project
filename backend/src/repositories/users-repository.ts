import { Prisma, User } from 'prisma/generated/client'

export interface UsersRepository {
  createMany(data: Prisma.UserCreateInput[]): Promise<User[]>
  findMany(query: string): Promise<User[]>
}
