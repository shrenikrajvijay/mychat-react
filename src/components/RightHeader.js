import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './RightHeader.css'
import { connect } from "react-redux"

@connect((store) => {
  return {
    selectedRoomTitle : store.Rooms.selectedRoom.name,
    selectedRoomUsers: store.Rooms.selectedRoomUsers
  }
})

class RightHeader extends React.Component {

    render () {
        return (

            <div className="Right-Header">
                <div className="centered">
                  <div> {this.props.selectedRoomTitle} </div>
                    {(this.props.selectedRoomUsers) ? this.props.selectedRoomUsers.map((person) => <span key={person}>{person}, </span>) : ""}
                </div>
            </div>
        )
    }

}

export default RightHeader