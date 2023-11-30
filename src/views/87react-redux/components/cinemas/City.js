import React from "react";
import { useState } from "react";
// import store from "../../../81Redux";
import { connect } from "react-redux";
function City(props) {
  let [list, setList] = useState(["北京", "上海"]);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li
            key={item}
            onClick={() => {
              props.change(item)
              // store.dispatch({
              //   type: "change-city",
              //   value: item,
              // });

              // props.history.push("/cinemas");
              // 退回页面
              props.history.goBack();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapDispatchToProps = {
  change(item) {
    return {
      type: "change-city",
      value: item,
    };
  },
};
export default connect(null, mapDispatchToProps)(City);
