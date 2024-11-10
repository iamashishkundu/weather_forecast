import React from 'react';
const array = [
  {
    fname:"abcc",
    lname:"xyzzz",
    img:"logo192.png"
  },
  {
    fname:"abcc1111111111111",
    lname:"xyzzz1111111111111",
    img:"logo512.png"
  },
  {
    fname:"abcc2222222222222222",
    lname:"xyzzz2222222222222222",
    img:"logo192.png"
  },
  {
    fname:"abcc33333333333333",
    lname:"xyzzz33333333333333",
    img:"logo512.png"
  },
]
const Heading = ({img,fname, lname})=>{
  return(
    <>
    <img src={img} alt="" />
    <h1>
    {fname}{lname}
    </h1>
    </>
  )
}

const Array = () => {
  return (
    <>
      <Heading fname={array[1].fname }img= {array[2].img}  />
    </>
  );
}

export default Array;
