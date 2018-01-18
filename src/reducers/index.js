import { combineReducers } from 'redux'
import User from './UserReducer'
import Rooms from './RoomsReducer'

const mychat = combineReducers({
  User: User,
  Rooms: Rooms
})

export default mychat