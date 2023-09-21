import React from "react";

import { HashRouter, Route } from "react-router-dom";
import Films from './components/Films'
import Cinemas from './components/Cinemas'
import Center from './components/Center'



function App(props) {
  return (
    <div>
      <HashRouter>
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/center" component={Center}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
