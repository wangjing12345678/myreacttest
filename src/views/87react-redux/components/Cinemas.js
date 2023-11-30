import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { getCinemsListAction } from "../../81Redux/actionCreater";

function Cinemas(props) {
  useEffect(() => {
    if (props.cityList.length === 0) {
      props.getCinemsList();
    } else {
      console.log("缓存");
    }

    return () => {
      // unsubscribe();
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/city");
        }}
      >
        {props.cityName}
      </button>
      cinemas
      <ul>
        {props.cityList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cityName: state.CityReducer.cityName,
    cityList: state.CinemaListReducer.list,
  };
};
const mapDispatchToProps = {
  getCinemsList() {
    return getCinemsListAction();
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
