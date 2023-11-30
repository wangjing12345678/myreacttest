import React, { useEffect, useState } from "react";
import store from "../../../views/81Redux/index";
import { getCinemsListAction } from "../../81Redux/actionCreater";

function Cinemas(props) {
  let [cityName, setCityName] = useState(store.getState().CityReducer.cityName);
  let [cityList, setCityList] = useState(store.getState().CinemaListReducer.list);

  var unsubscribe = store.subscribe(() => {
    
    setCityList(store.getState().CinemaListReducer.list);
  });

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      console.log(";;;");
      store.dispatch(getCinemsListAction());
    } else {
      console.log('缓存')
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/city");
        }}
      >
        {cityName}
      </button>
      cinemas
      <ul>
        {cityList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cinemas;
