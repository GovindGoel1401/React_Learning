import React,{useState, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header.jsx';
import Body from './component/Body.js';
function GithubProfile(){


    return(
        <>
         
        <Header></Header>
        <Body></Body>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);