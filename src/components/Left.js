import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './Left.css'
import LeftHeader from './LeftHeader.js'
import LeftBody from './LeftBody.js'


class Left extends React.Component {

    render () {
        return (
            <div className="Left">
                <LeftHeader username={this.props.username}/>
                <LeftBody selectedRoom={this.props.selectedRoom} changeRoom={this.props.changeRoom} data={this.props.data}/>
            </div>
        )
    }

}

export default Left