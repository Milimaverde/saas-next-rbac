import { FastifyInstance } from "fastify"
import { createAccount } from "./auth/create-account"
import { authenticateWithPassword } from "./auth/authenticate-with-password"
import { getProfile } from "./auth/get-profile"
import { resetPassword } from "./auth/reset-password"
import { requestPasswordRecover } from "./auth/request-password-recover"


export const routeRegister = (app: FastifyInstance) => {
  app.register(createAccount)
  app.register(authenticateWithPassword)
  app.register(getProfile)
  app.register(requestPasswordRecover)
  app.register(resetPassword)
}

