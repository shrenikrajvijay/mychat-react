import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './Right.css'
import RightHeader from './RightHeader.js'
import RightBody from './RightBody.js'
import RightFooter from './RightFooter.js'


class Right extends React.Component {

    render () {
        return (
            <div className="full-height">
                <RightHeader></RightHeader>
                <RightBody></RightBody>
                <RightFooter></RightFooter>
            </div>
        )
    }

}

export default Right