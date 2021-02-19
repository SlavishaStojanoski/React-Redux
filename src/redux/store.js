// global state / redux state
// store is an object

// ACTIONS - they initiate the change
// REDUCERS - they save the change in the store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { counterReducer } from './counter/counter'
import { loginReducer } from './login/login'
import { albumsReducer } from './albums/albums'
import { songsReducer } from './songs/songs'
import { imageLogoReducer } from './imageLogo/imageLogo'

const allReducers = combineReducers({
  counterReducer, // { counter: 0 }
  loginReducer, // { username: '', password: '' }
  albumsReducer,
  songsReducer,
  imageLogoReducer,
})

const store = createStore(allReducers, applyMiddleware(thunk, logger))

export default store