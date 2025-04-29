import React , {useState, useEffect} from 'react';

const MyComponent = () =>{
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=> setCounter(counter+1),1000);
        console.log("Timer updating");
        return ()=>{
            console.log("Unmounted");
            clearInterval(timer);
        }
    },[counter]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current time is {counter}</p>
        </div>
    )
}

export default MyComponent;