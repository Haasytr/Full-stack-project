import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUsersUseCase } from './find-users'

let usersRepository: InMemoryUsersRepository
let sut: GetUsersUseCase

describe('Get users use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUsersUseCase(usersRepository)
  })
  it('should be able to create a user', async () => {
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
    ])

    const { users } = await sut.execute({
      q: 'Volley',
    })

    expect(users).toHaveLength(2)
    expect(users).toEqual([
      expect.objectContaining({ favorite_sport: 'Volley' }),
      expect.objectContaining({ favorite_sport: 'Volley' }),
    ])
  })
})
