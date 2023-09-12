import React, { Component } from "react";
export default class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(e) => {
          this.props.changeValue(e.target.value)
        }} value={this.props.value}/>
      </div>
    );
  }
}
