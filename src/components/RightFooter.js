import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './RightFooter.css'
import { connect } from "react-redux"
import {setUsername} from "../actions/UserAction";
import {setSelectedRoomUsers} from "../actions/RoomAction";
import axios from "axios/index";

@connect((store) => {
  return {
    selectedRoom: store.Rooms.selectedRoom,
    username: store.User.username
  }
})

class RightFooter extends React.Component {

  constructor(){
    super();
    this.state = {
      clickDisabled : true,
      message : ""
    }
  }

  setMessage(e){
    if(e.target.value !== "") {
      this.setState({clickDisabled: false});
    } else {
      this.setState({clickDisabled: true});
    }
    this.state.message = e.target.value;
  }

  sendMessage(){
    // this.props.dispatch(setUsername(this.state.message))
    var message = {
      roomId: this.props.selectedRoom.id,
      name: this.props.username,
      message: this.state.message,

    }
    axios.post('http://localhost:9000/api/rooms/'+this.props.selectedRoom.id+'/messages', message)
      .then((results) => {
        this.setState({
          message: ""
        })
      });
  }

  render () {
    return (
      <div className="row Right-Footer">
        <div className="col-sm-10">
          <input className="" disabled={typeof this.props.selectedRoom.name === 'undefined'} value={this.state.message} onChange={(e) => this.setMessage(e)} placeholder="Type a message.."/>
        </div>
        <div className="col-sm-2">
          <button className="" disabled={this.state.clickDisabled} onClick={() => this.sendMessage()}>Send</button>
        </div>
      </div>
    )
  }

}

export default RightFooter