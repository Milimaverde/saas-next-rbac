import { FastifyInstance } from "fastify"
import { createAccount } from "./auth/create-account"

export const routeRegister = (app: FastifyInstance) => {
  app.register(createAccount)
}