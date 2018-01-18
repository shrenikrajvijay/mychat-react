const Rooms = (state = {rooms : [], selectedRoom: {}, selectedRoomUsers: [], selectedRoomMessages: []}, action) => {
  switch(action.type) {
    case 'SET_ROOMS':
      return {...state, rooms: action.payload}
    case 'SET_SELECTED_ROOM':
      return {...state, selectedRoom: action.payload}
    case 'SET_SELECTED_ROOM_USERS':
      return {...state, selectedRoomUsers: action.payload}
    case 'SET_SELECTED_ROOM_MESSAGES':
      return {...state, selectedRoomMessages: action.payload}
    default:
      return state
  }
}

export default Rooms