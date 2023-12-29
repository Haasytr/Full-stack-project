import { User } from 'prisma/generated/client'
import { UsersRepository } from '../repositories/users-repository'

interface FindUsersUseCaseRequest {
  q: string
}

interface FindUsersUseCaseResponse {
  users: User[]
}

export class GetUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    q,
  }: FindUsersUseCaseRequest): Promise<FindUsersUseCaseResponse> {
    const users = await this.usersRepository.findMany(q)

    return {
      users,
    }
  }
}
