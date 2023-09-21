import React, { useReducer } from "react";
const reducer = (prevState, action) => {
  //处理函数
  console.log("lll");
  let newState = { ...prevState };
  switch (action.type) {
    case "plus":
      newState.count++;
      return newState;
    case "minus":
      newState.count--;
      return newState;
    default:
      return prevState;
  }
};
const intialState = {
  count: 0,
};

function App(props) {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div style={{ padding: "40px" }}>
      <button
        onClick={() => {
          dispatch({
            type: "minus",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "plus",
          });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
