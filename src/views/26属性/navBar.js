import React, { Component } from "react";

import wProp from "prop-types";
console.log(wProp);
export default class NavBar extends Component {
  // 写法2:
  static propTypes = {
    title: wProp.string,
    leftShow: wProp.bool,
  };
  //写法2
  static defaultProps = {
    leftShow: true,
  };
  test() {
    console.log(this);
  }
  render() {
    // 父组件传过来的
    console.log(this.props);
    return (
      <div>
        {this.props.leftShow ? "aa" : this.props.title}
        {this.test()}
      </div>
    );
  }
}
// 类属性
// 写法1:
// NavBar.propTypes = {
//   title: wProp.string,
// };

// 默认值
// 写法1
// NavBar.defaultProps = {
//   leftShow: true,
// };
