import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import Left from './Left.js'
import Right from './Right.js'
import $ from 'jquery';
import { connect } from "react-redux"
import axios from 'axios'
import { setRooms } from "../actions/RoomAction"

const database = [
  { name: 'Tea Chats', id: 0, users: ['Ryan','Nick', 'Danielle'], messages: [{name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null},{name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null}, {name: 'Danielle', message: 'leggooooo', id: 'hh9843', reaction: null}]},
  { name: 'Coffee Chats', id: 1, users: ['Jessye'], messages: [{name: 'Jessye', message: 'ayy', id: 'ff35278', reaction: null}]}
];

@connect((store) => {
  return {
  }
})

class Chat extends React.Component {

  constructor(){
    super();

  }
  componentWillMount() {
    axios.get('http://localhost:9000/api/rooms')
      .then((results) => {
        this.props.dispatch(setRooms(results.data))
      });
  }


  changeRoom(room) {
    this.setState({selectedRoom : room.name});
  }

  render () {

    return (
      <div className="full-height">
        <Left />
        <Right />
      </div>
    )
  }

}

export default Chat