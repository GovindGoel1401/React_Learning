

import React,{ useState,useEffect,useCallback,useMemo,useRef } from 'react'
import ReactDOM from 'react-dom/client'
//useMemo hook 
//1 .Counter Button : increase 
//: input field: fibonnaci number
// 0 1 1 2 3 5 8 13
 
// function App(){


   
//     const [count,setCount]= useState(0); 
//         let money = useRef (0 );
//         // console.log(money.current);
//     return(
//         <>
//         <h1>Counter is:{count} </h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>

//          <h1>Money is:{money.current} </h1>
//         <button onClick={()=>money.current= money.current+1}>Increment</button>
//         <button onClick={()=>money.current=money.current-1}>Decrement</button>
        
//         </>
//     )
// }
    function StopWatch(){


        const [time,setTime]= useState(0);
        const intervalRef = useRef(null);

        const [isRunning,setisRunning] = useState(false);
        function start(){
            //  if (intervalRef.current !== null) return;
            if(!isRunning){  
              intervalRef.current  =   setInterval(()=>{
                    setTime(preTime=> preTime+1);
                },1000)
            }
            setisRunning(true);  
        }
        function stop(){
            if(isRunning){
            clearInterval(intervalRef.current);
            intervalRef.current=null;
            }
            setisRunning(false);
        }
        function reset(){
            stop();
            setTime(0);

        }

        return (
            <>
                <h1>StopWatch is :{time}</h1>   
                <button onClick={start}>Start</button>
                <br></br>
                <br></br>
                <button onClick={stop}>Stop</button>
                <br></br>
                <br></br>
                <button onClick={reset}>Reset</button> 
            </>
        )
    }

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>)