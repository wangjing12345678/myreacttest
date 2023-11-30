import React from "react";
import { useState } from "react";
import store from "../../../81Redux";

function City(props) {
  let [list, setList] = useState(["北京", "上海"]);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li
            key={item}
            onClick={() => {
              store.dispatch({
                type: "change-city",
                value: item,
              });

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

export default City;
