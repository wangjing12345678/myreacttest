import React from "react";
import { useStoreController, setTestWangjing } from "../../context";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Erji from "../erji";
import { Outlet } from "react-router-dom";


function Layoutooo(props) {
  console.log(props)
  const [controller, dispatch] = useStoreController();

  const { testWangjing } = controller;

  const [hhh, setHhh] = React.useState(1);
  const [yyy, setYyy] = React.useState(4);
  const hhhy = React.useMemo(() => hhh * 2, [hhh]);

  function testStore() {
    console.log(testWangjing);
    setTestWangjing(dispatch, !testWangjing);
  }
  //   const childRef = React.useRef(null);
  React.useEffect(() => {
    // console.log(childRef);
    // childRef.current.style["display"] = "none";
    console.log("看看看看");
    return () => {
      setYyy("ppp");
    };
  }, [hhh]);
  const cangeHHH = () => {
    setHhh(4);
  };

  return (
    <div onClick={testStore}>
      {testWangjing ? hhhy : "oooo"}
      <Outlet />
    </div>
  );
}

export default Layoutooo;
