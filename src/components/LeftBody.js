import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './LeftBody.css'
import { connect } from "react-redux"
import {setRooms, setSelectedRoom} from "../actions/RoomAction"
import axios from "axios/index";
import { setSelectedRoomUsers } from "../actions/RoomAction"
import { setSelectedRoomMessages } from "../actions/RoomAction"
import  io from 'socket.io-client'

const socket = io("http://localhost:9000")

@connect((store) => {
  return {
    rooms: store.Rooms.rooms,
    selectedRoom: store.Rooms.selectedRoom
  }
})

class LeftBody extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    socket.on('messages updated', () => {
      this.getUsers(this.props.selectedRoom)
      this.getMessages(this.props.selectedRoom)
    })
  }

  changeRoom(room){
    this.props.dispatch(setSelectedRoom(room))
    this.getUsers(room)
    this.getMessages(room)
  }

  getUsers(room) {
    axios.get('http://localhost:9000/api/rooms/'+room.id)
      .then((results) => {
        this.props.dispatch(setSelectedRoomUsers(results.data.users))
      });
  }

  getMessages(room) {
    axios.get('http://localhost:9000/api/rooms/'+room.id+"/messages")
      .then((results) => {
        this.props.dispatch(setSelectedRoomMessages(results.data))
      });
  }

  render () {

    var listItems = this.props.rooms.map((elem) =>
        <div className={(this.props.selectedRoom.name == elem.name)? ' item selected-item':'item '} onClick={() => this.changeRoom(elem)} key={elem.id}>{elem.name}</div>
    )

    return (
        <div className="Left-Body">
            {listItems}
        </div>
    )
  }

}

export default LeftBody