import React, {useState, useMemo} from 'react';

const Memo = () => {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    const mult = useMemo(function multiply (){
        console.log("*************")
        return add*10;
    }, [add])

// function multiply (){
//     console.log("*************")
//     return add*10;
// }

  return (
    <>
    {mult}
    <button onClick={()=>setAdd(add+1)}>increment</button>
    <span>{add}</span>
    <button onClick={()=>setSub(sub-1)}>decrement</button>
    <span>{sub}</span>
    </>
  )
}

export default Memo