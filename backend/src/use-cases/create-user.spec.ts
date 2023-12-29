import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { CreateUserUseCase } from './create-users'

let usersRepository: InMemoryUsersRepository
let sut: CreateUserUseCase

describe('Create users use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(usersRepository)
  })
  it('should be able to create users', async () => {
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
    ])

    expect(createdUsers).toHaveLength(2)
    expect(createdUsers).toEqual([
      expect.objectContaining({ city: 'New York' }),
      expect.objectContaining({ favorite_sport: 'Basketball' }),
    ])
  })
})
