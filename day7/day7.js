import React,{useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import  Colorfull from "./components/color";


function Main(){
    return(
    <Colorfull name="sham"></Colorfull>

    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);

// export default React.memo(Colorfull);