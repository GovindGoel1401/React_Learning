import React,{useState} from 'react';
import ReactDom from 'react-dom/client';
import Card from './component/Card';
import Header from './component/Header';
import Footer from './component/Footer';
//Header 
//Body  
//Footer
import arr from "./utils/Dummy"
import {greet as goa, meet as roa} from "./utils/Dummy";
  
function App() {

    let [A , setA] = useState(arr);
    function sortArray(){
        A.sort((a,b)=>a.price-b.price);
        setA([...A]);
    }
    function priceAbove500(){
        const B =arr.filter((value)=value.price>500);
        setA(B);
    }  
    return(
            <>
        
            <Header/>
            <button  onClick={sortArray}>Sort By Price</button>
            <button onClick={priceAbove500}>Price Above 500</button>
            <div className="middle" style={{display:"flex", gap:"30px", flexWrap:"wrap"}}>
                { 
                    A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
                }           
            </div>
            <Footer/>
            </>
    );
}
const Root= ReactDom.createRoot(document.getElementById('root'));
Root.render(<App/>);