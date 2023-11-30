import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
function TabBar(props) {
  useEffect(() => {
    console.log("create");
    return () => {
      console.log("destory");
    };
  }, []);
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "0",
        padding: "0",
      }}
    >
      <li style={{ flex: "1", textAlign: "center", lineHeight: "60px" }}>
        {/* 声明式导航 */}
        <NavLink to="/films" activeClassName="hightLight">
          电影
        </NavLink>
      </li>
      <li style={{ flex: "1", textAlign: "center" }}>
        <NavLink to="/cinemas" activeClassName="hightLight">
          影院
        </NavLink>
      </li>
      <li style={{ flex: "1", textAlign: "center" }}>
        <NavLink to="/center" activeClassName="hightLight">
          我的
        </NavLink>
      </li>
    </ul>
  );
}

export default TabBar;
