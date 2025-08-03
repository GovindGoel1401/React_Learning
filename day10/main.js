

import React,{ useState,useEffect,useCallback,useMemo } from 'react'
import ReactDOM from 'react-dom/client'
//useMemo hook 
//1 .Counter Button : increase 
//: input field: fibonnaci number
// 0 1 1 2 3 5 8 13


 function Fibonaccai (n){
        if(n<=1)
            return n;
        return Fibonaccai(n-1)+ Fibonaccai(n-2);
    } 

function App(){


   
    const [count,setCount]= useState(0);
    const [number,setNumber] = useState(0);
    

    // const Fibonaccai = useCallback((n)=>{
    //     if(n<=1)
    //         return n;
    //     return Fibonaccai(n-1)+ Fibonaccai(n-2);
    // },[])


    const result = useMemo (()=>{Fibonaccai(number)},[number])    
    return(
        <>
        <h1>Counter is:{count} </h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <div>
            <h2>Fibonaccai number :{result}</h2>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}></input>
        </div>

        </>
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(<App/>)