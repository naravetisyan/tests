import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let arr = [1, 2, 3, 4, 5, 6];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <i className="am flag" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <select>
          {
          arr.map((value, index) => {
            return <option key={index}>{value}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default App;
