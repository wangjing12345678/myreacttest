import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("aa");

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(name);
          }}
        >
          搜索
        </button>
      </div>
    </div>
  );
}
