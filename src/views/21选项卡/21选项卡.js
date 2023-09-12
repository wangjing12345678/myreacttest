import React, { Component } from "react";
import Film from "./film";
import Cinema from "./cinema";
import Center from "./center";
import "../css/选项卡.css";
export default class App extends Component {
  state = {
    list: [
      { id: 1, text: "电影" },
      { id: 2, text: "影院" },
      { id: 3, text: "我的" },
    ],
    current: 0,
  };
  handleClick(index) {
    this.setState({
      current: index,
    });
  }
  whichCom() {
    if (this.state.current == 0) {
      return <Film></Film>;
    } else if (this.state.current == 1) {
      return <Cinema></Cinema>;
    }
    return <Center></Center>;
  }
  aa(){
    console.log(this)
  }
  render() {
    return (
      <div>
        {this.whichCom()}

        <ul className="tabList">
          {this.state.list.map((x, index) => (
            <li className={this.state.current == index ? "active" : ""} key={x.id} onClick={() => this.handleClick(index)}>
              {x.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
