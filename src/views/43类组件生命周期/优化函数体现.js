import React, { Component } from "react";
class Box extends Component {
  shouldComponentUpdate(nextProps) {
    // 上一次current 和index相等的要更新
    // 这一次current 和index相等的要更新
    // 剩余的不用更新
    if (this.props.current == this.props.index || nextProps.current == nextProps.index) {
      return true;
    }
    return false;
  }
  componentWillReceiveProps(nextProps) {
    // 即使父组件没传属性也会触发该函数
    // 最先获得父组件传来的属性 可以利用属性进行逻辑处理
    console.log("componentWillReceiveProps",nextProps);
  }
  render() {
    return (
      <div style={{ width: "50px", height: "50px", background: this.props.current == this.props.index ? "red" : "blue", marginRight: "10px" }}>
        {this.props.aa}
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    aa: ["00", "01", "02", "03", "04", "05", "06"],
    current: 0,
    text: "111",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              current: e.target.value,
            });
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {this.state.aa.map((x, index) => {
            return <Box key={x} aa={x} current={this.state.current} index={index}></Box>;
          })}
        </div>
        <button
          onClick={() => {
            this.setState({
              text: "0000",
            });
          }}
        >
          更改
        </button>
      </div>
    );
  }
}
