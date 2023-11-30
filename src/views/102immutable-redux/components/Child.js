import React from "react";
import store from "../81Redux";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({
            type: "hide-tabbar",
          });

          store.dispatch({
            type: "change-city",
            value: "jjj",
          });
        }}
      >
        更改
      </button>
    </div>
  );
}

export default Child;
