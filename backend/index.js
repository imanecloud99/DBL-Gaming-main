import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
import gamesRoutes from './routes/games.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRoutes)
app.use('/games', gamesRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on Port: http://localhost:${PORT}`),
    ),
  )
  .catch((error) => console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false)
