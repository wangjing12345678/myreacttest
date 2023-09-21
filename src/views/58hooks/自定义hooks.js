import React, { useEffect, useState } from "react";

function useMyHooks() {
  const [a, setA] = useState(0);
  useEffect(() => {
    setA(9);
  }, []);
  return {
    a,
  };
}

function App(props) {
  const { a } = useMyHooks();
  return <div>{a}</div>;
}

export default App;
