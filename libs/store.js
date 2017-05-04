const fortune = require('fortune');
const mongodbAdapter = require('fortune-mongodb');

const store = fortune({
  user: {
    name: String
  },

  room: {
    title: String,
    description: String,
    isPublished: Boolean
  },

  category: {
    title: String,
    description: String,
    isPublished: Boolean
  },

  post: {
    title: String,
    description: String,
    isPublished: Boolean
  }

}, {
  adapter: [
    mongodbAdapter,
    {
      // options object, URL is mandatory.
      url: 'mongodb://localhost/ps'
    }
  ]
})

module.exports = store;