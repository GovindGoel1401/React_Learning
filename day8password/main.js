import React,{use, useState,useEffect,useCallback} from 'react'  ; 
import ReactDOM from 'react-dom/client';
function PasswordGenerator(){

    const [Password,setPassword]=useState("");
    const [length,setLength] = useState(10);
    const [numberChange,setnumberChange] = useState(false);
    const [characterChange,setcharacterChange] = useState(false);


    const generatePassword = useCallback(()=>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberChange){
            str+= "0123456789";
        }
        if(characterChange){
            str+= "!@#$%^&*()_+[]{}|;:,.<>?";
        }

        let pass ="";

        for(let i=0 ; i<length;i++){
            pass += str[Math.floor(Math.random()*str.length)] 
        }
            setPassword(pass);
    },[length, numberChange, characterChange]);//generatePassword likh jo chahe to numberChnage,length ki jagha 


    useEffect(()=>{
        generatePassword();
    },[generatePassword]);
   
    return (
        <>
            <h1> {Password}</h1> 
            <div className='second'> 
                <input type="range" min ={5} max={22} value={length} onChange={(e=>setLength(e.target.value))}></input>
                <label>Length ({length})</label>
                <input type='checkbox' defaultChecked={numberChange} onChange={()=> setnumberChange(!numberChange)}></input>
                <label>Number</label>
                <input type='checkbox' defaultChecked={characterChange} onChange={()=>setcharacterChange(!characterChange)}></input>
                <label>Character</label>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator/>)