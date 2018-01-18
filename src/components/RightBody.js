import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './RightBody.css'
import { connect } from "react-redux"

@connect((store) => {
  return {
    messages: store.Rooms.selectedRoomMessages,
    username: store.User.username
  }
})

class RightBody extends React.Component {

    render () {

        var rooms = this.props.messages
        return (
            <div className="Right-Body">{(rooms) ? rooms.map((message, index) => <div className={(message.name == this.props.username)? 'pull-right' : ''} key={message.id}><div className={(message.name == this.props.username)? 'user-author' : 'messages'}>{message.message}</div><div className={(message.name == this.props.username)? 'author-hidden' : 'author'}>{message.name}</div></div>) : ""}</div>
        )
    }

}

export default RightBody