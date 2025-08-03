import React, { useState, useEffect, useCallback } from 'react';
function Body(){

    const [Profile,setProfile]= useState([]);
    const [numberofProfile,setnumberofProfile]= useState('');
    const [username,setUsername] = useState('');

    const  generateProfile = useCallback( async(count)=>{

        try{
        const ran = Math.floor(1+Math.random()*1000);
    const response =  await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
    const  data = await response.json(); 
    setProfile(data);   }
    catch(error){
        console.error("Error fetching random Profiles", error);
    }
    },[]);

    const searchProfile = useCallback( async () => {
        try{
            const response = await fetch(`http://api.github.com/users/${username}`);
            if(response.status ===404){
                alert("user not found");
                return;
            }
            const data = await response.json();
            setProfile[(data)];

        }catch(error){
            console.error("error fetching user profile:",error);
        }
    },[username]);

    useEffect(()=>{ 
        generateProfile(10);
    },[generateProfile]);

    return( 
        <div className='but'>
             <div className="search-container">
        <input
          className="input"
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={searchProfile}>Search Profile</button>
      </div>
            < input type='text' className='inpu' value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=> generateProfile(Number(numberofProfile)) }>Search Profile</button>
        <div className="profile">
            {
                Profile.map((value)=>{
                  return  <div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                })
            }
        </div>
            </div>
    )
}
export default Body;


//try catch 
//use callback 
//Search Button : Name ke basis : user profile exist, display krra dega  