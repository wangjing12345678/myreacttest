import React, { useState, useEffect } from "react";
import { testJson } from "../../api/test";
function Child(props) {
  useEffect(() => {
    var timer = setInterval(() => {
      console.log(";;;");
    }, 1000);

    return () => {
      console.log('组件销毁')
      clearInterval(timer)
    };
  }, []);
  return <div>child</div>;
}

function App(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    testJson().then((res) => {
      console.log(res);
      setList(res.data.test);
    });
  }, []); //传空数组意思是当前这个函数只会执行一次

  const [name, setName] = useState("wangjing");
  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1));
  }, [name]);

  return (
    <div>
      {name}
      { name == 'Wangjing'? <Child></Child>:""}
      
      <button
        onClick={() => {
          setName("xiaoming");
        }}
      >
        更改
      </button>
    </div>
  );
}

export default App;
