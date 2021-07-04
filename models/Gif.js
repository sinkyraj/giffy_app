const { model, Schema } = require('mongoose')

const Gif = new Schema({
  title: String,
  source: String,
  url: String,
  author: String,
  gifId: String
})

module.exports = model('Gif', Gif)
