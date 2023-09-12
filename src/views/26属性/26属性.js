import React, { Component } from "react";
import NavBar from "./navBar";

export default class App extends Component {
  render() {
    var obj = {
      title: "kkk",
      leftShow: true,
    };
    return (
      <div>
        <NavBar title="lll" leftShow={false}></NavBar>
        <NavBar {...obj}></NavBar>
      </div>
    );
  }
}
