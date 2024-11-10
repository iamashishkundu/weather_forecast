import React from "react";
import { firstname } from "./A";

const Z = () => {
  return (
    <>
      <firstname.Consumer>
        {(name) => {
          return <h1>my name is {name}</h1>;
        }}
      </firstname.Consumer>
    </>
  );
};

export default Z;