import { useState } from "react";

export default function Arrays(){
  const [number, setNumber] = useState(0);
  function addOne() {
    setNumber(number + 1);
    setNumber((e) => {
      return e + 1;
    });
  }

  return (
    <div style={{ fontSize: "100px" }}>
      click here to add one: {number}
      <button onClick={addOne}>+</button>
    </div>
  );
}

