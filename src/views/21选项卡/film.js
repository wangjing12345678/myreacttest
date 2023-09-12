import React, { Component } from "react";
import { filmList } from "../../api/test";
export default class App extends Component {
  state = {
    filmShowList: [],
    saveList: [],
    searchText: "",
  };
  constructor(props) {
    // 必须写super
    super(props);

    console.log(props);
    filmList().then((res) => {
      this.setState({
        filmShowList: res.data,
        saveList: res.data,
      });
      console.log(res.data);
    });
  }
  handleInput(e) {
    const tempArr = JSON.parse(JSON.stringify(this.state.saveList));
    let filterArr = tempArr.filter((x) => x.name.indexOf(e.target.value) > -1);
    if (e.target.value) {
      this.setState({
        filmShowList: filterArr,
      },() => {
        console.log('状态 dom 已经更新完毕')
      });
    } else {
      this.setState({
        filmShowList: this.state.saveList,
      });
    }
  }
  render() {
    return (
      <div className="content">
        <div className="searchBox">
          <input type="text" onInput={this.handleInput.bind(this)} />
          {/* <button>搜索</button> */}
        </div>
        <ul>
          {this.state.filmShowList.map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
