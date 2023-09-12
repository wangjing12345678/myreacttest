import React, { Component } from "react";
export default class App extends Component {
  state = {
    list: [1, 3, 4, 5, 5, 6, 6, 7],
  };
  myref = React.createRef();
  getSnapshotBeforeUpdate() {
    // 获取容器高度
    return this.myref.current.scrollHeight;
  }
  componentDidUpdate(prevProps, prevState, val) {
    console.log(this.myref.current.scrollHeight);
    this.myref.current.scrollTop += this.myref.current.scrollHeight - val;
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [...[23, 23, 23, 45, 56], ...this.state.list],
            });
          }}
        >
          来邮件了
        </button>
        <h1>邮箱应用</h1>
        <div ref={this.myref} style={{ height: "200px", overflow: "auto" }}>
          <ul>
            {this.state.list.map((x, index) => (
              <li key={index} style={{ height: "100px", background: "red" }}>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
