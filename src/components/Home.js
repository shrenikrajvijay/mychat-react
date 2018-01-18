import React, { PropTypes } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import styles from './Home.css'
import  { setUsername }from '../actions/UserAction'
import { connect } from "react-redux"

@connect((store) => {
  return {
  }
})

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      clickDisabled : true
    }
  }

  handleChange(e){
    if(e.target.value !== "") {
      this.setState({clickDisabled: false});
    } else {
      this.setState({clickDisabled: true});
    }
    this.state.inputText = e.target.value;
  }

  goToChat(){
    this.props.dispatch(setUsername(this.state.inputText))
    this.props.router.push('/chat');
  }

  render () {
    return (
      <div className="input">
        <InputGroup>
          <Input onChange={(e) => this.handleChange(e)} placeholder="Type your username..."/>
        </InputGroup>
        <Button onClick={() => this.goToChat()} color="danger"  disabled={this.state.clickDisabled}>Join the mychat Chat!</Button>
      </div>
    )
  }

}

export default Home