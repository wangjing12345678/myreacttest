import React, { useMemo, useState } from "react";

function App(props) {
  const [name, setName] = useState(0);
  const nameChange = useMemo(() => {
    return name + 1;
  }, [name]);
  return (
    <div>
      {name}
      {nameChange}
      <button onClick={() => {
        setName(90)
      }}>变化</button>
    </div>
  );
}

export default App;
