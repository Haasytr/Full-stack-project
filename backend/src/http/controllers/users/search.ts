import { type FastifyRequest, type FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeGetUserUseCase } from '../../../use-cases/factories/make-get-user-use-case'


export async function search(req: FastifyRequest, reply: FastifyReply) {
  try {
    const getUserSchema = z.object({
      q: z.string(),
    })

    const { q } = getUserSchema.parse(req.query)

    const getUserUseCase = makeGetUserUseCase()

    const { users } = await getUserUseCase.execute({ q })

    return reply.status(200).send({
      data: users,
    })
  } catch (err) {
    return reply.status(500).send({
      message: err,
    })
  }
}
