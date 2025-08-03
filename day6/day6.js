import React,{useState} from 'react';
import ReactDOM from "react-dom/client"

function Counter(){
    let [count,setCount] = useState(0);

    function incrementNunber(){
        // count =count+1;
        setCount(count+1);
        // document.querySelector("h1").innerText = `Count is: ${count}`;
    }
    function decrementNumber(){
        count=count-1;
        setCount(count);
        // document.querySelector(h1).innerText = `Count is: ${count}`;
    }
    return (
        <div className='first'>
            <h1>Count is: {count}</h1>
            <button onClick={incrementNunber}>Increment {count}</button>
            <button onClick={()=>{
                count=count-1;
                setCount(count);
                // document.querySelector("h1").innerText = `Count is: ${count}`;
            }}>Decrement {count} </button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);

