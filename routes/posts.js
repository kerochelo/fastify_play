const {getPosts, getPost, addPost, deletePost} = require('../controllers/posts')

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

const postPostOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'body'],
      properties: {
        title: {type: 'string'},
        body: {type: 'string'}
      }
    },
    response: {
      201: Post
    }
  },
  handler: addPost
}

const deletePostOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {type: 'string'}
        }
      }
    }
  },
  handler: deletePost
}

function postRoutes(fastify, options, done) {
  fastify.get('/posts', getPostsOpts)
  fastify.get('/posts/:id', getPostOpts)
  fastify.post('/posts', postPostOpts)
  fastify.delete('/posts/:id', deletePostOpts)
  done()
}

module.exports = postRoutes
