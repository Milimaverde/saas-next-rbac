import { FastifyInstance } from "fastify"
import { createAccount } from "./auth/create-account"
import { authenticateWithPassword } from "./auth/authenticate-with-password"

export const routeRegister = (app: FastifyInstance) => {
  app.register(createAccount)
  app.register(authenticateWithPassword)
}

