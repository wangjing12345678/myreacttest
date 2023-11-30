import React from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("token", 11);
          history.push(`/center`);
        }}
      >
        存储token
      </button>
    </div>
  );
}

export default Login;
