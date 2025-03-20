import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifyJwt from "@fastify/jwt";
import fastifySwaggerUI from '@fastify/swagger-ui'
import {
  serializerCompiler,
  ZodTypeProvider,
  validatorCompiler,
  jsonSchemaTransform
} from 'fastify-type-provider-zod'

import { routeRegister } from "./routes";
import { env } from "@saas/env";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Next.js SaaS',
      description: 'Full-stack SaaS with multi-tenant & RBAC.',
      version: '1.0.0',
    },
    securityDefinitions: {
      Authorization: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'JWT Authorization header using the Bearer scheme. Example: "Bearer {token}"',
      },
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(fastifyCors)
app.register(routeRegister)

app.listen({ port: env.SERVER_PORT }).then(() => {
  console.log('Server running')
})