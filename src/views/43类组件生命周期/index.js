import React, { Component } from "react";
export default class App extends Component {
  state = {
    aa: "11",
    myName: "王晶",
  };
  refTest = React.createRef();
  //  不推荐使用了
  UNSAFE_componentWillMount() {
    // 拿不到dom元素 可修改state 类似vue created
    // 初始化数据
    console.log(this.refTest);
    console.log("willMount", this.state.aa);
  }
  componentDidMount() {
    // 类似 mounted
    // 数据请求
    // 基于创建完的dom进行初始化
    console.log("didMount");
    console.log(this.refTest);
  }
  // 此时取不到dom更新后的值
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState);
  }
  //性能优化函数
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.myName === nextState.myName) {
      return false;
    }

    return true;
  }
  render() {
    console.log("render");
    return (
      <div ref={this.refTest}>
        {this.state.myName}
        <button
          onClick={() => {
            this.setState({
              myName: "pppp",
            });
          }}
        >
          改变
        </button>
      </div>
    );
  }
}
