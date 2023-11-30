import React, { useEffect } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Center(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      {/* <button
        onClick={() => {
          localStorage.clear("token");
        }}
      >
        清空token
      </button> */}
      <div
        onClick={() => {
          props.history?.push("/filmOrder");
        }}
      >
        电影订单
      </div>
    </div>
  );
}
//模拟高阶函数
function testConnect(cb, obj) {
  var value = cb();
  return (Mycomponent) => {
    return (props) => {
      return (
        <div style={{ color: "red" }}>
          <Mycomponent {...value} {...props} {...obj}></Mycomponent>
        </div>
      );
    };
  };
}

export default testConnect(
  () => {
    return {
      a: 1,
      b: 2,
    };
  },
  {
    aa() {},
    bb() {},
  }
)(Center);
