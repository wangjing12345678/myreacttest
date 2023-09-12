import React, { Component } from "react";

class FimLsit extends Component {
  componentDidMount() {
    if (this.props.type == 1) {
      console.log("正在上映");
    } else {
      console.log("即将上映");
    }
  }
  componentWillReceiveProps(nextProps) {
    // 此时 this.props 是老的
    if (nextProps.type == 1) {
      console.log("正在上映");
    } else {
      console.log("即将上映");
    }
  }
  
  render() {
  
    return <div>{this.props.type}</div>;
  }
}
class Child extends Component {
  componentWillUnmount() {
    console.log("销毁");
  }
  render() {
    return <div>Child</div>;
  }
}

export default class App extends Component {
  state = {
    type: 1,
    show: true,
  };
  // 初始化 可以用下面替换componentWillMount
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextState);
    // return的东西会合并state
    return {
      type: nextState.type,
    };
  }
  // 配合这个用
  componentDidUpdate(prevProps, prevState,value) {
    console.log(value)
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return 100
  }

  render() {
    console.log('render111')
    return (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            listStyle: "none",
          }}
        >
          <li
            style={{
              marginRight: "10px",
            }}
            onClick={() => {
              this.setState({
                type: 1,
              });
            }}
          >
            正在热映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 2,
              });
            }}
          >
            即将上映
          </li>
        </ul>
        <FimLsit type={this.state.type}></FimLsit>
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          切换
        </button>
        {this.state.show ? <Child></Child> : ""}
      </div>
    );
  }
}
