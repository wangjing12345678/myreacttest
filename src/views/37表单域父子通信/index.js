import React, { Component } from "react";
import Field from "./components/Field";
export default class App extends Component {
  state = {
    userName: "2323",
    password: "",
  };
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field
          label="用户名"
          type="text"
          value={this.state.userName}
          changeValue={(val) => {
            console.log(val);
            this.setState({
              userName: val,
            });
          }}
        ></Field>
        <Field
          label="密码"
          type="password"
          changeValue={(val) => {
            console.log(val);
            this.setState({
              password: val,
            });
          }}
        ></Field>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              userName: "",
              password: "",
            });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
