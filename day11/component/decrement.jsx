import {useState} from 'react';
import GlobalContext from './Global';
import { useContext } from 'react';


export default function Decrement() {
        // const data = useContext(GlobalContext)
        const {count,setCounts}= useContext(GlobalContext);
        const {data} = useContext(GlobalContext) ;
    return (
    <>
      <h1>Decrease Value then : {count} and data is {data} </h1>
      <button onClick={()=>{setCounts(count-1)}}>Decrement</button>
    </>
  );
}
