const router = require('express').Router()
const { Gif } = require('../models')

router.get('/gifs', (req, res) => {
  Gif.find({})
    .then(gifs => res.json(gifs))
    .catch(err => console.log(err))
})

router.post('/gifs', (req, res) => {
  Gif.create(req.body)
    .then(gif => res.json(gif))
    .catch(err => console.log(err))
})

router.delete('/gifs/:id', (req, res) => {
  Gif.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router