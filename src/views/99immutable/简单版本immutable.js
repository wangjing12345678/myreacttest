import React from "react";
import { useState } from "react";
import { fromJS } from "immutable";

//简单版本

function EasyImmutable(props) {
  const [info, setInfo] = useState(
    fromJS({
      name: "王晶",
      location: {
        por: "吉林",
        city: "长春",
      },
      favor: ["读书", "看报"],
    })
  );
  return (
    <div>
      <h1>个人信息</h1>
      <div>
        {info.get("name")}
        <br />
        {info.get("location").get("por") + "-" + info.get("location").get("city")}
        <br />
        <ul>
          {info.get("favor").map((x, index) => (
            <li key={x}>
              <span>{x}</span>
              <button
                onClick={() => {
                  setInfo(
                    info.updateIn(["favor"], (list) => {
                      return list.splice(index, 1);
                    })
                  );
                }}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          setInfo(info.set("name", "opop").setIn(["location", "city"], "沈阳"));
        }}
      >
        修改
      </button>
    </div>
  );
}

export default EasyImmutable;
