import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import {
  // jsonSchemaTransform,
  serializerCompiler,
  ZodTypeProvider,
  validatorCompiler
} from 'fastify-type-provider-zod'

import { routeRegister } from "./routes";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(routeRegister)

app.listen({ port: 3333 }).then(() => {
  console.log('Server running')
})