import React, { useEffect } from "react";
import store from "../../81Redux";

function Detail(props) {
  console.log(props);
  useEffect(() => {
    store.dispatch({
      type: "hide-tabbar",
    });
    return () => {
      store.dispatch({
        type: "show-tabbar",
      });
    };
  }, []);
  return <div>{props.match.params.myId}</div>;
}

export default Detail;
