
const router = require('express').Router()
const { Gif } = require('../models')
const axios = require('axios')

router.get('/giphy/:search', (req, res) => {
axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.search}&limit=20&rating=g&api_key=${process.env.GIPHY_API_KEY}`)
 .then(({ data: { data } })=>{
    res.json(data)
   Gif.find({})
   .then(gifs=> {
    const gifsFiltered = data.filter(gif=>{
      let keep = true
      gifs.forEach(saved=>{
        if(saved.gifId===gif.id) {
          keep = false
        }
      })
      return keep
    })
     res.json(gifsFiltered)
   })
   .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
})

module.exports = router