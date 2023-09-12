import React, { Component } from "react";
const GlobalContext = React.createContext(); //创建context对象
class Son extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(val) => {
          return <div>{val.aa}</div>;
        }}
      </GlobalContext.Consumer>
    );
  }
}

class Ajjj extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(val) => {
          return (
            <div>
              <button
                onClick={() => {
                    val.onChangeIno("子组件更改" )
                //   this.props.changeAa("子组件更改");
                }}
              >
                子组件更改
              </button>
              {val.aa}
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

export default class App extends Component {
  state = {
    aa: "999",
  };
  render() {
    return (
      <GlobalContext.Provider
        value={{
          aa: this.state.aa,
          onChangeIno: (val) => {
            this.setState({
              aa: val,
            });
          },
        }}
      >
        <div>
          <button
            onClick={() => {
              this.setState({
                aa: "oooo",
              });
            }}
          >
            改变
          </button>
          <Son></Son>.
          <Ajjj
            changeAa={(val) => {
              this.setState({
                aa: val,
              });
            }}
          ></Ajjj>
        </div>
      </GlobalContext.Provider>
    );
  }
}
