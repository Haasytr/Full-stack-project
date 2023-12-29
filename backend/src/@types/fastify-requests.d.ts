import { Readable } from 'stream'

declare module 'fastify' {
  interface FastifyRequest {
    parts: () => AsyncIterable<{ file: Readable }>
  }
}

export interface Part {
  file: Readable
}
