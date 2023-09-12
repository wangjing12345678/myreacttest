import React from "react";
function TestRef(props) {
  let myRef = React.createRef();
  const ClickItem = () => {
    console.log(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={ClickItem}>点击</button>
    </div>
  );
}

export default TestRef;
