import React, { Component } from "react";
var bus = {
  list: [],
  subscribe(callBack) {
    this.list.push(callBack);
  },
  publish(val) {
    this.list.forEach((callBack) => {
      callBack && callBack(val);
    });
  },
};

class Son extends Component {
  state = {
    info: "",
  };
  render() {
    bus.subscribe((val) => {
      this.setState({
        info: val,
      });
    });
    return <div>{this.state.info}</div>;
  }
}

export default class App extends Component {
  state = {
    inputText: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText}
          onChange={(e) => {
            this.setState({
              inputText: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            bus.publish(this.state.inputText);
          }}
        >
          点击
        </button>
        <Son></Son>
      </div>
    );
  }
}
