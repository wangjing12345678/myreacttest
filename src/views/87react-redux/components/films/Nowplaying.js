import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function FilmItem(props) {
  return (
    <div
      onClick={() => {
        props.history.push(`/detail/${props.name}`);
      }}
    >
      {props.name}
    </div>
  );
}

const WithFilmItem = withRouter(FilmItem);

function Nowplaying(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]);
  }, []);
  const history = useHistory();
  const handleClickHook = (item) => {
    console.log(item);
    // window.location.href = "#/detail/" + item;
    props.history.push(`/detail/${item}`);
    // history.push(`/detail/${item}`);
    // history.push({ pathname: "/detail", query: { aa: 1 } });
    // history.push({ pathname: "/detail", state: { aa: 1 } });
  };
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return (
            <WithFilmItem key={index} {...item}></WithFilmItem>
            // <FilmItem key={index} {...item} {...props}></FilmItem>
            // <li
            //   style={{ marginBottom: "20px", cursor: "pointer" }}
            //   key={index}
            //   onClick={() => {
            //     handleClickHook(item);
            //   }}
            // >
            //   {item}
            // </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nowplaying;
