import { FastifyInstance } from 'fastify'
import { create } from './create'
import fastifyMultipart from 'fastify-multipart'
import { search } from './search'

export async function UsersRoutes(app: FastifyInstance) {
  app.register(fastifyMultipart)
  app.post('/files', create)

  app.get('/users', search)
}
