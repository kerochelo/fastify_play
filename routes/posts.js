const {getPosts, getPost} = require('../controllers/posts')

const Post = {
  type: 'object',
  properties: {
    id: {type: 'integer'},
    title: {type: 'string'},
    body: {type: 'string'},
  }
}

const getPostsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Post
      }
    }
  },
  handler: getPosts
}

const getPostOpts = {
  schema: {
    response: {
      200: Post
    }
  },
  handler: getPost
}

function postRoutes(fastify, options, done) {
  fastify.get('/posts', getPostsOpts)
  fastify.get('/posts/:id', getPostOpts)

  done()
}

module.exports = postRoutes
