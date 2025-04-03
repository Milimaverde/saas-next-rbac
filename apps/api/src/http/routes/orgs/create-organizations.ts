import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"

export async function createOrganization(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().register(auth)
}