import { useState } from 'react'
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
import Form from '../../components/Form'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350
  },
  media: {
    height: 150
  }
}))

const Home = () => {
  const classes = useStyles()

  const [gifState, setGifState] = useState({
    search: '',
    gifs: []
  })

  const handleInputChange = ({ target }) => {
    setGifState({ ...gifState, [target.name]: target.value })
  }

  const handleSearchGif = event => {
    event.preventDefault()
    Gif.getGiphy(gifState.search)
      .then(({ data: gifs }) => {
        console.log(gifs)
        setGifState({ ...gifState, gifs })
      })
      .catch(err => console.error(err))
  }

  const handleSaveGif = gif => {
    Gif.addGif(gif)
      .then(() => {
        const gifs = gifState.gifs.filter(giphy => giphy.id !== gif.gifId)
        setGifState({ ...gifState, gifs })
      })
  }

  return (
    <>
      <Form
        search={gifState.search}
        handleInputChange={handleInputChange}
        handleSearchGif={handleSearchGif}
      />
      {
        gifState.gifs.length
          ? gifState.gifs.map(gif => (
            <Card key={gif.id} className={classes.root}>
              <CardHeader
                title={gif.title}
                subheader={gif.username.length ? `Created by ${gif.username}` : 'Creator unknown'}
              />
              <CardMedia
                className={classes.media}
                image={gif.images.original.url}
                title={gif.title}
              />
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  onClick={() => handleSaveGif({
                    title: gif.title,
                    source: gif.images.original.url,
                    url: gif.url,
                    author: gif.username,
                    gifId: gif.id
                  })}
                >
                  Save
                </Button>
                <Button
                  size='small'
                  color='primary'
                  href={gif.url}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          ))
          : null
      }
    </>
  )
}

export default Home
