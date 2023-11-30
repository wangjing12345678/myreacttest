import React, { Component } from "react";

import { HashRouter as Router, BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Films from "../views/87react-redux/components/Films";
import Cinemas from "../views/87react-redux/components/Cinemas";
import Center from "../views/87react-redux/components/Center";
import Detail from "../views/87react-redux/components/Detail";
import Login from "../views/87react-redux/components/Login";
import City from "../views/87react-redux/components/cinemas/City";
import Search from "../views/87react-redux/components/Search";

function Notfound() {
  return <div>404</div>;
}

function isAuth() {
  return localStorage.getItem("token");
}

function IndexRouter(props) {
  return (
    <div>
      <Router>
        <Switch>
          {/* 动态路由 */}
          <Route path="/detail/:myId" component={Detail}></Route>
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas} exact></Route>
          <Route path="/cinemas/search" component={Search}></Route>
          {/* <Route path="/center" component={Center}></Route> */}
          <Route
            path="/center"
            render={(props) => {
              return isAuth() ? <Center {...props}></Center> : <Redirect to="/login"></Redirect>;
            }}
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/city" component={City}></Route>
          {/* 模糊匹配 */}
          {/* <Redirect from="/" to="films"></Redirect> */}
          {/* 精确匹配 */}
          <Redirect from="/" to="films" exact></Redirect>
          <Route component={Notfound}></Route>
        </Switch>
        {props.children}
      </Router>
    </div>
  );
}

export default IndexRouter;
