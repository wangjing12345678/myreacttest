import React, { Component } from "react";
export default class App extends Component {
  userName = React.createRef();
  state = {
    testValue: "wangjing",
  };
  changeVal(e) {
    console.log(arguments)
    this.setState({
      testValue: e.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* 非受控组件 */}
        <input type="text" ref={this.userName} defaultValue={90} />
        {/* 受控组件 */}
        
        <input
          type="text"
          value={this.state.testValue}
          onChange={(e) => {
            this.changeVal(e);
          }}
        />
        
        <input type="checkbox" />
      </div>
    );
  }
}


