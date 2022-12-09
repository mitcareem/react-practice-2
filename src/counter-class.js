import "./App.css";

import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
