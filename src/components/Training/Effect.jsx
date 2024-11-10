import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
    useEffect(()=>{
      if (count===0) {
        document.title = "react counter start";
      } else {
        document.title = count;
      }
    });  
 

  return (
    <>
      {count}
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Effect;