const fastify = require('fastify')({
  logger: true
})
fastify.register(require('./routes/posts'))

const PORT = 3000

fastify.get('/', (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world'}
})

const start = async() => {
  try {
    await fastify.listen(PORT)
  } catch (e) {
    fastify.log.error(e)
    process.exit(1)
  }
}

start()
