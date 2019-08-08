import React, { Component } from 'react'
import './Nav.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { logoutUser } from '../../ducks/reducer'

class Nav extends Component {
  logout = () => {
    axios.delete('/auth/logout').then(() => {
      this.props.logoutUser()
      this.props.history.push('/')
    })
  }
  render() {
    return (
      <div className="Nav">
        <div className="spacer" />
        <div className="logo">
          <Link to="/">
            <div className="circle">
              <div className="$">$</div>
            </div>
          </Link>
        </div>
        <div className="account-info">
          {this.props.username ? (
            <>
              <h3>Welcome, {this.props.username}</h3>
              <button onClick={this.logout}>Logout</button>
            </>
          ) : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { username } = reduxState
  return { username }
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Nav))
