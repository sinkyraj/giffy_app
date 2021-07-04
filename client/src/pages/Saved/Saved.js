import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Gif from '../../utils/GifAPI'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350
  },
  media: {
    height: 150
  }
}))

const Saved = () => {
  const classes = useStyles()

  const [gifState, setGifState] = useState({
    gifs: []
  })

  const handleDeleteGif = id => {
    Gif.deleteGif(id)
      .then(() => {
        const gifs = gifState.gifs.filter(gif => gif._id !== id)
        setGifState({ ...gifState, gifs })
      })
  }

  useEffect(() => {
    Gif.getGifs()
      .then(({ data: gifs }) => {
        setGifState({ ...gifState, gifs })
      })
  }, [])

  return (
    <>
      {
        gifState.gifs.length
          ? gifState.gifs.map(gif => (
            <Card key={gif._id} className={classes.root}>
              <CardHeader
                title={gif.title}
                subheader={gif.author.length ? `Created by ${gif.author}` : 'Creator unknown'}
              />
              <CardMedia
                className={classes.media}
                image={gif.source}
                title={gif.title}
              />
              <CardActions>
                <Button
                  size='small'
                  color='secondary'
                  onClick={() => handleDeleteGif(gif._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))
          : null
      }
    </>
  )
}

export default Saved
