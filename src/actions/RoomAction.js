
export const setRooms = rooms => {
  return {
    type: 'SET_ROOMS',
    payload: rooms
  }
}

export const setSelectedRoom = room => {
  return {
    type: 'SET_SELECTED_ROOM',
    payload: room
  }
}

export const setSelectedRoomUsers = users => {
  return {
    type: 'SET_SELECTED_ROOM_USERS',
    payload: users
  }
}

export const setSelectedRoomMessages = users => {
  return {
    type: 'SET_SELECTED_ROOM_MESSAGES',
    payload: users
  }
}