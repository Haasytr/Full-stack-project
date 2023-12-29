import { UsersRepository } from '@/repositories/users-repository'
import { User } from 'prisma/generated/client'

interface CreateUserUseCaseRequest {
  name: string
  city: string
  country: string
  favorite_sport: string
}

interface CreateUserUseCaseResponse {
  createdUsers: User[]
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    users: CreateUserUseCaseRequest[],
  ): Promise<CreateUserUseCaseResponse> {
    const createdUsers = await this.usersRepository.createMany(users)

    return {
      createdUsers,
    }
  }
}
