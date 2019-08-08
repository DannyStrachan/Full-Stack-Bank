import React, { Component } from 'react'
import './Dashboard.css'
import Transaction from '../Transaction/Transaction'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        Dashboard
        <Transaction />
      </div>
    )
  }
}
