module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/gif_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

