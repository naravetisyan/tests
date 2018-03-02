import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flag, Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <i className="am flag" />
        </header>

const FlagExampleFlag = () => (
  <Segment>
    <Flag name='ae' />
    <Flag name='france' />
    <Flag name='myanmar' />
  </Segment>
)
      </div>
    )
  }
}

export default App;
