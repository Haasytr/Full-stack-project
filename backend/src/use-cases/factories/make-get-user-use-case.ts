import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users.repository'
import { GetUsersUseCase } from '../find-users'

export function makeGetUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const getUserUseCase = new GetUsersUseCase(usersRepository)

  return getUserUseCase
}
