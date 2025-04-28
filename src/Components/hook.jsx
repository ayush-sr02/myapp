import React, {useState} from "react";

function HookComponent(){
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>Value is {value}</p>
            <button onClick={()=> setValue(value+1)}>Increment</button>
            <button  onClick={()=> setValue(value-1)}>Decrement</button>
        </div>
    )
}
export default HookComponent;