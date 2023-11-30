import React, { useEffect, useState } from "react";
import store from "./81Redux";
import Child from "./components/Child";

function TestImmutableRedux(props) {
  const [isShow, setIsShow] = useState(store.getState().TabbarReducer.get("show"));
  const [cityName, setCityName] = useState(store.getState().CityReducer.cityName);

  useEffect(() => {
    store.subscribe(() => {
      setIsShow(store.getState().TabbarReducer.get("show"));
      setCityName(store.getState().CityReducer.cityName);
    });
  }, []);
  return (
    <div>
      {isShow ? "1" : 3}
      {cityName}
      <Child></Child>
    </div>
  );
}

export default TestImmutableRedux;
