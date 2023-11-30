import React, { useEffect, useState } from "react";
import IndexRouter from "../../router/indexRouter";
import TabBar from "./components/TabBar";
import { connect } from "react-redux";
function App(props) {
  // let [isshow, setIsShow] = useState(true);
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <IndexRouter>{props.isShow && <TabBar></TabBar>}</IndexRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    a: 1,
    b: 2,
    isShow: state.TabbarReducer.show,
  };
};
export default connect(mapStateToProps)(App);
