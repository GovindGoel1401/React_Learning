import React , {useState,useEffect} from "react";

function Colorfull(name){
        const [color,setColor] = useState("black");
        // document.body.style.backgroundColor = color;
        console.log("name will be printed by memo "+name);
        //UseEffect (Callback Fuhnction, Dependency Array)
        useEffect(()=>{

            document.body.style.backgroundColor = color;
        },[color]);  
        return (
            <>
            <h1>Color Selector</h1>
            <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")} >Red</button>
                <button style={{backgroundgroundColor:"green"}}onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}> Blue</button>     
                <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            </div>
            </>
        )
    
}
export default React.memo(Colorfull);