import React, { useEffect, useState } from "react";
import store from "../../../views/81Redux/index";
import { getCinemsListAction } from "../../81Redux/actionCreater";
// redux-promise
function Search(props) {
  let [cityList, setCityList] = useState(store.getState().CinemaListReducer.list);
  var unsubscribe = store.subscribe(() => {
    console.log(store.getState().CinemaListReducer.list);
    setCityList(store.getState().CinemaListReducer.list);
  });

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      store.dispatch(getCinemsListAction());
    } else {
      console.log("缓存");
    }

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <ul>
        {cityList.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
