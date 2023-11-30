import React, { useEffect } from "react";
import { Map } from "immutable";
import { List } from "immutable";
import { useState } from "react";
// -------------
// var obj1 = {
//     name:'aaa'
// }
// var obj2 = obj1 //浅拷贝
// obj2.name = 'lll'
// ---------------
// var obj1 = {
//   name: "aaa",
//   arr:[1,2,3]
// };
// var obj2 = {
//   ...obj1, //仅仅是比浅拷贝多复制了一层不能说是深拷贝 如果里面有复杂类型比如 数组 他就不是深拷贝了
// };
// obj2.name = "lll";
// obj2.arr.push('oo')
// console.log(obj1)
// ---------------
// var obj1 = {
//     name: "aaa",
//     arr:[1,2,3],
//     address:undefined
//   };
//   var obj2 = JSON.parse(JSON.stringify(obj1)) //深拷贝 不能有 undefined值会消失
//   obj2.name = "lll";
//   obj2.arr.push('oo')
//   console.log(obj1)
//   console.log(obj2)
// ---------------
// 递归深复制 耗性能
// ---------------
// immutable方案
var obj = {
  name: "aaa",
  age: 100,
};
var oldImmutableObj = Map(obj);
console.log(oldImmutableObj);
var newImmutableObj = oldImmutableObj.set("name", "ppp");
console.log(newImmutableObj.get("name"));
console.log(newImmutableObj.toJS());

function TestImmutable(props) {
  const [info, setInfo] = useState(Map({ name: "aaa", age: 90 }));
  const [info2, setInfo2] = useState({ name: "aaa", age: 90 });
  const [info3, setInfo3] = useState(
    Map({
      name: "aaa",
      age: 90,
      select: "aa",
      filter: Map({
        text: "22",
      }),
    })
  );

  var arr = List([1, 2, 3]);

  var arr2 = arr.push(4);
  console.log(arr2);
  console.log(arr);

  return (
    // 第一种情况
    <div>
      <div>
        {info.get("name")}
        {info.get("age")}
        <button
          onClick={() => {
            setInfo(info.set("name", "ppp").set("age", 80));
          }}
        >
          设置
        </button>
      </div>
      {/* 第二种情况 */}
      <div>
        {info2.name}
        {info2.age}
        <button
          onClick={() => {
            const old = Map(info2);
            const newData = old.set("name", "ppp").set("age", 80);
            setInfo2(newData.toJS());
          }}
        >
          设置
        </button>
      </div>
      {/* 第三种情况 */}
      <div>
        {info3.get("name")}
        {info3.get("age")}
        {info3.get("filter").get("text")}
        <button
          onClick={() => {
            setInfo3(info3.set("name", "000"));
            const obj = {
              text: "pppp",
            };
            setInfo3(info3.set("filter", Map(obj)));
          }}
        >
          设置
        </button>
        <Child filter={info3.get("filter")} name={info3.get("name")}></Child>
      </div>
    </div>
  );
}

function Child(props) {
  useEffect(() => {
    console.log("更新");
  }, [props.filter]);
  return (
    <div>
      {props.filter.get("text")}
      <button
        onClick={() => {
          props.set("text", "ooo");
        }}
      >
        更改
      </button>
    </div>
  );
}

export default TestImmutable;
