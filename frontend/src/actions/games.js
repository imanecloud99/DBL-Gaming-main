import { FETCH_GAME, FETCH_GAMES } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getGame = (id) => async (dispatch) => {
  try {
    const {
      data: { name, summary, coverURL },
    } = await api.fetchGame(id)

    dispatch({ type: FETCH_GAME, payload: { name, summary, coverURL } })
  } catch (error) {
    console.log(error)
  }
}

export const getGames = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.fetchGames(searchQuery)

    dispatch({ type: FETCH_GAMES, payload: { data } })
  } catch (error) {
    console.log(error)
  }
}
