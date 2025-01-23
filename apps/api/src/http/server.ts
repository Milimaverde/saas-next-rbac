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

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Next.js SaaS',
      description: 'Full-stack SaaS with multi-tenant & RBAC.',
      version: '1.0.0',
    },
    servers: [],
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: 'my-secret-jwt',
})

app.register(fastifyCors)
app.register(routeRegister)

app.listen({ port: 3000 }).then(() => {
  console.log('Server running')
})