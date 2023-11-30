import React from "react";
import { useState } from "react";
import { Map, List } from "immutable";

//复杂版本

function HightTest(props) {
  const [info, setInfo] = useState(
    Map({
      name: "王晶",
      location: Map({
        por: "吉林",
        city: "长春",
      }),
      favor: List(["读书", "看报"]),
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
                  setInfo(info.set("favor", info.get("favor").splice(index, 1)));
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
          setInfo(info.set("name", "opop").set("location", info.get("location").set("por", "辽宁")));
        }}
      >
        修改
      </button>
    </div>
  );
}

export default HightTest;
