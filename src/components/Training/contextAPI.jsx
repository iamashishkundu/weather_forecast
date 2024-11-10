import React, { useState } from "react";

import axios from "axios";

const Api2 = () => {

  const [jokes, setJokes] = useState([]);

  console.log("helllo  : ", jokes);

  const handleJokes = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const data = await res.data;
    setJokes(data);
  };

  return (
    <>
      {jokes.map((item, key) => {
        <p key={key}>{item?.email + " " + item?.name}</p>;
      })}

      <button onClick={() => handleJokes()}>Add</button>
    </>
  );
};
export default Api2;
