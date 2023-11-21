import Fastify from 'fastify'
import { fastifyConfig } from '@/config'

export async function start() {
  const app = Fastify(fastifyConfig)

  app.get('/', { preValidation: [auth] }, function (request) {
    console.log(request.user)
    return request.user
  })

  return app
}

function auth(request, _, done) {
  request.user = {
    name: 'Amantur'
  }
  done()
}