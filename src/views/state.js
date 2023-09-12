import React, { Component } from "react";
import { json } from "react-router-dom";
export default class App extends Component {
  state = {
    list: ["111", "222", "333"],
  };
  myRef = new React.createRef();
  handleClick = () => {
    console.log(this.myRef.current.value);
    // 不要直接修改state值 会造成不可预期的问题
    let newList = JSON.parse(JSON.stringify(this.state.list));
    newList.push(this.myRef.current.value);
    this.setState({
      list: newList,
    });
    this.myRef.current.value = "";
  };
  delItem = (index) => {
    let newList = JSON.parse(JSON.stringify(this.state.list));
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={this.myRef} />
          <button onClick={this.handleClick.bind(this)}>add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {/* 富文本展示 */}
              <span
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              ></span>
              <button onClick={this.delItem.bind(this, index)}> 删除</button>
            </li>
          ))}
        </ul>
        {/* 条件渲染方案一： */}
        {/* { this.state.list.length?'':<div>待办事项暂无</div> } */}
        {/* 方案二： */}
        {/* {this.state.list.length === 0 && <div>待办事项暂无</div>} */}
        {/* 方案三：css */}
        {/* <div className={this.state.list.length === 0?'':'hidden'}>待办事项暂无</div> */}
        
      </div>
    );
  }
}

/**
  map方案：如无必要 勿增实体
 */
