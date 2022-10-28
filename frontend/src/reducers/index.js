import { combineReducers } from 'redux'

import auth from './auth'
import games from './games'

export const reducers = combineReducers({ auth, games })
