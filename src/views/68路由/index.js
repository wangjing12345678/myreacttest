import React, { useEffect, useState } from "react";
import IndexRouter from "../../router/indexRouter";
import TabBar from "./components/TabBar";
import store from "../../views/81Redux/index";
function App(props) {
  let [isshow, setIsShow] = useState(store.getState().TabbarReducer.show);
  useEffect(() => {
    store.subscribe(() => {
      console.log("app中定于", store.getState());
      setIsShow(store.getState().TabbarReducer.show);
      console.log("lll", isshow);
    });
  }, []);
  return (
    <div>
      <IndexRouter>{isshow && <TabBar></TabBar>}</IndexRouter>
    </div>
  );
}

export default App;
