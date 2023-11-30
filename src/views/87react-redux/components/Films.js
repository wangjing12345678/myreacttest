import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, useHistory, NavLink } from "react-router-dom";
import Nowplaying from "./films/Nowplaying";
import Comingsoon from "./films/Comingsoon";
import style from "../../../css/films.module.css";

function Films(props) {
  return (
    <div className="kkk">
      <ul className={style.aa + " ppp"}>
        <li>
          <NavLink to="/films/nowplaying" activeClassName={style.hightLight}>
            正在热映
          </NavLink>
          <NavLink to="/films/comingsoon">即将上映</NavLink>
        </li>
      </ul>
      {/* 嵌套路由 */}
      <Switch>
        <Route path="/films/nowplaying" component={Nowplaying}></Route>
        <Route path="/films/comingsoon" component={Comingsoon}></Route>
        <Redirect from="/films" to="/films/nowplaying"></Redirect>
      </Switch>
    </div>
  );
}

export default Films;
