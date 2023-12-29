import { type FastifyRequest, type FastifyReply } from 'fastify'
import { z } from 'zod'

import { makeCreateUserUseCase } from '@/use-cases/factories/make-create-user-use-case'
import { transformCSVToJSON } from '@/utils/transform-csv-to-json'
import { Part } from '@/@types/fastify-requests'

async function FormatAndValidateCSV(csv: AsyncIterable<Part>) {
  const createUserSchema = z.object({
    name: z.string(),
    city: z.string(),
    country: z.string(),
    favorite_sport: z.string(),
  })

  const createUserSchemaArray = z.array(createUserSchema)

  const formattedCSV = await transformCSVToJSON(csv)

  return createUserSchemaArray.parse(formattedCSV)
}

export async function create(req: FastifyRequest, reply: FastifyReply) {
  try {
    const csv = await req.parts()

    const users = await FormatAndValidateCSV(csv)

    const createUsersUseCase = makeCreateUserUseCase()

    await createUsersUseCase.execute(users)

    return reply.status(200).send({
      message: 'The file was uplodead successfully.',
    })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return reply.status(500).send({
        message: 'Error while verifying file, please try again',
      })
    }
  }
}
