// props


import React from 'react';
 const style = {
  height:"220px",
  width:"300px",
  border:"5px solid red",
  margin:"20px",
  padding:"15px"
 }
 
 
const Addy = (props) => {
  return (
    <div style={style} >
      <h1>Name:{props.name}</h1>
      <h2>Price:{props.price}</h2>
      <h2>Discription:{props.discription}</h2>
    </div>
  );
}

export default Addy;