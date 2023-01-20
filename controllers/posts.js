const { v4:uuidv4 } = require('uuid')
let posts = require('../Posts')

const getPosts = (request, reply) => {
  reply.send(posts)
}

const getPost = (request, reply) => {
  const { id } = request.params
  const post = posts.find((post) => post.id == id)
  reply.send(post)
}

const addPost = (request, reply) => {
  const { title, body } = request.body
  const post = {
    id: uuidv4(),
    title,
    body,
  }
  posts = [...posts, post]
  reply.code(201).send(post)
}

module.exports = {
  getPosts,
  getPost,
  addPost,
}
