import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.event();
            console.log("子传父");
          }}
        >
          展示
        </button>
      </div>
    );
  }
}

class TestWatch extends Component {
  // 非受控组件 会出现的问题
  // 当父组件aaa变化时候 子组件状态的aaa不变
  state = {
    aaa: this.props.aaa,
  };
  render() {
    return <div>{this.state.aaa}</div>;
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
      </div>
    );
  }
}
export default class App extends Component {
  state = {
    isShow: false,
    aaa: 1,
  };
  render() {
    return (
      <div>
        <Navbar
          event={() => {
            this.setState({
              isShow: !this.state.isShow,
              aaa: 2,
            });
          }}
        ></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
        <TestWatch aaa={this.state.aaa}></TestWatch>
      </div>
    );
  }
}
