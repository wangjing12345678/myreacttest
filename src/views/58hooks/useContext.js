import React, { useContext } from "react";
const GlobalContext = React.createContext();
function Child(props) {
  const value = useContext(GlobalContext);
  console.log(value);
  console.log(props);
  return <div>{value.name}</div>;
}

function App(props) {
  return (
    <GlobalContext.Provider
      value={{
        name: "lll",
      }}
    >
      <div>
        <Child name={0}></Child>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
