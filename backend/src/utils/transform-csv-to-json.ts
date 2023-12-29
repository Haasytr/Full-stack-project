import csvToJson from 'csvtojson'
import { Part } from '../@types/fastify-requests'

export async function transformCSVToJSON(csvData: AsyncIterable<Part>) {
  try {
    for await (const part of csvData) {
      if (part.file) {
        const chunks: Uint8Array[] = []

        for await (const chunk of part.file) {
          chunks.push(chunk)
        }

        const fileBuffer = Buffer.concat(chunks)
        const fileContent = fileBuffer.toString('utf-8')

        return await csvToJson().fromString(fileContent)
      }
    }
  } catch (err) {
    return err
  }
}
