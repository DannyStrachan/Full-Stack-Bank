import React, { Component } from "react";
import Transaction from "./../Transaction/Transaction";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        Dashboard
        <Transaction />
      </div>
    );
  }
}
