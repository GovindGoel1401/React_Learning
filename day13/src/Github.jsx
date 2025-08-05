import react,{useState,useEffect} from "react";
import {useParams} from "react-router";

export default function Github(){
    // const data = useParams();
    const {name} =useParams();
    const [Profile,setProflie]= useState('')


    async function fetchuser(){
        const response= await fetch(`https://api.github.com/users/${name}`);
        const data =await response.json(); 
        setProflie(data);
    }

    useEffect(()=>{
        fetchuser();
    },[])
    return(
        <>
        <h1>My Github Profile</h1>
        {/* {Display the user data} */}
        <div>
            <img src={Profile?.avatar_url}></img>
            <h2>{Profile?.login }</h2>
        </div>

        </>
    );
}