const posts = require('../Posts')

const getPosts = (request, reply) => {
  reply.send(posts)
}

const getPost = (request, reply) => {
  const { id } = request.params
  const post = posts.find((post) => post.id == id)
  reply.send(post)
}

module.exports = {
  getPosts,
  getPost,
}
