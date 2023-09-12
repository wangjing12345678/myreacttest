import React, { useRef, useState } from "react";

function App(props) {
  const myText = useRef();
  const [name, setName] = useState("0");
  const handleAdd = () => {
    setName(myText.current.value);
    console.log(myText.current.value);
  };
  return (
    <div>
      <input ref={myText} value={name} onChange={handleAdd} />
      <button onClick={handleAdd}>输出</button>
    </div>
  );
}

export default App;
