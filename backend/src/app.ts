import fastify from 'fastify'
import cors from '@fastify/cors'

import { UsersRoutes } from './http/controllers/users/routes'

export const app = fastify()

app.register(cors, {})

app.register(UsersRoutes)
