import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Center(props) {
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

export default withRouter(Center);
