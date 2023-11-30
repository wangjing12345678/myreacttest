import React, { useEffect } from "react";
import { connect } from "react-redux";

function Detail(props) {
  const { hide, show, match } = props;
  useEffect(() => {
    hide();
    return () => {
      show();
    };
  }, [match.params.myId, show, hide]);
  return <div>{match.params.myId}</div>;
}

// connect 接受两个参数 第一个是给孩子传的属性 第二个传给孩子传的回调函数

const mapDispatchToProps = {
  show() {
    return {
      type: "show-tabbar",
    };
  },
  hide() {
    return {
      type: "hide-tabbar",
    };
  },
};

export default connect(null, mapDispatchToProps)(Detail);
