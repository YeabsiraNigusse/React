import { useState } from "react";

export default function State(){

    const [count, setcount] = useState(0);

    return(
       <>
       <p>{count}</p>
        <button onClick={() => setcount(count + 1)}>Increment</button>
       </>
    )
}