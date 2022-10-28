import request from 'request-promise'
import dotenv from 'dotenv'

dotenv.config()

const clientID = process.env.clientID
const access_token = process.env.access_token

export const getGame = async (req, res) => {
  const { id } = req.params

  try {
    const response = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/games/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body: `fields name,summary,cover.url; where id=${id};`,
    })

    const game = JSON.parse(response)[0]
    const coverURL = game.cover.url.replace('thumb', '1080p')
    delete game['cover']
    res.status(200).json({ ...game, coverURL })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getGames = async (req, res) => {
  const { searchQuery } = req.query

  try {
    const response = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/games/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body:
        `${searchQuery ? `search "${searchQuery}";` : ''}` +
        `fields cover.url; where cover!=null; limit 12;`,
    })

    const games = JSON.parse(response)
    res.status(200).json(games)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
