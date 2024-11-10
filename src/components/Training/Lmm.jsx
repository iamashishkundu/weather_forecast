import React, { useState } from 'react';

const Lmm = () => {
const  [count, setCount]= useState(0);

const increment = ()=>{
  setCount(count + 1);
}
  return (
    <>
    <h1>{count}</h1>
      <button onClick={increment}>Click me</button>
    </>
  );
}

export default Lmm;