import React from 'react'
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';
import {Button} from 'reactstrap';
import styles from './LeftHeader.css'
import {connect} from "react-redux"

@connect((store) => {
  return {
    username: store.User.username,
    loginTime: store.User.loginTime
  }
})


class LeftHeader extends React.Component {

  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {loginTime: 0}
  }

  tick() {
    this.setState({
      loginTime: Date.now() - this.props.loginTime
    })
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  }

  render() {

    var clockInMins = Math.round(((this.state.loginTime % 86400000) % 3600000) / 60000); // minutes

    if (clockInMins > 0) {
      return (
        <div className="Left-Header">
          <div className="centered">
            {this.props.username}
            <div>
              {clockInMins} minute(s)
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="Left-Header">
        <div className="centered">
          {this.props.username}
        </div>
      </div>
    )
  }
}

export default LeftHeader