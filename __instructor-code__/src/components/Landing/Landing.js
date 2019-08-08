import React, {Component} from 'react'
import './Landing.css'

export default class Landing extends Component {
  state = {
    usernameInput: '',
    emailInput: '',
    passwordInput: ''
  }
  render() {
    return (
      <div className='Landing'>
        Landing
      </div>
    )
  }
}
