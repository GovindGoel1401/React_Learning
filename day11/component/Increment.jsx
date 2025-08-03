import {useState} from 'react';
import GlobalContext from './Global';
import { useContext } from 'react';


export default function Increment() {
  
     const {count,setCounts}= useContext(GlobalContext);
    return (
    <>
      <h2> Child Counter is {count}</h2>
      <button onClick={() => setCounts(count + 1)}>Increment</button>
    </>
  );
}
