import React,{useCallback,useEffect,useState,useMemo,useRef} from "react";
import ReactDOM from "react-dom/client"
import Increment from "./component/Increment"
import Decrement from "./component/decrement"
import GlobalContext from "./component/Global";
import { useContext } from "react";
function App(){

        const [count,setCount]= useState(0);

    return (
        <>
            <GlobalContext.Provider value={{count:count,setCounts:setCount, data: "Rohit"}}>
            <h1>Count is :{count}</h1>
            <Increment/>
            <Decrement/>
            </GlobalContext.Provider>
        </>
    )

}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>)

