import React, { createContext } from "react";
import B from "../useContext/B";

const firstname = createContext();
const A = () => {
  return (
    <>
      <firstname.Provider value={"hello world"}>
        <B />
      </firstname.Provider>
    </>
  );
};

export default A;
export { firstname };