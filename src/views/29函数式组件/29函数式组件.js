import React, { Component } from "react";
import NavBar from "../26属性/navBar";
import SideBar from "./sideBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <SideBar bg="yellow"></SideBar>
      </div>
    );
  }
}
