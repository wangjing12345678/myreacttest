import React, { useReducer, useContext } from "react";
const GlobalContext = React.createContext();

const initailState = {
  a: "222",
};

const reducer = (preState, action) => {
  if (action.type == "aaa") {
    return { a: preState.a + "哈哈哈哈" };
  }
  return preState;
};

function Child1(props) {
  const value = useContext(GlobalContext);
  console.log(value);
  return (
    <div>
      <button
        onClick={() => {
          value.dispatch({
            type: "aaa",
          });
        }}
      >
        改变a
      </button>
      <button>改变b</button>
    </div>
  );
}

function Child2(props) {
  const value = useContext(GlobalContext);
  return <div>{value.state.a} </div>;
}
function Child3(props) {
  return <div>Child3</div>;
}

function App(props) {
  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
