import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";

import Home from "./src/Home";
import Contact from "./src/Contact";
import Menu from "./src/Menu";
import Hi from "./src/Hi";
import Details from "./src/Details";
import Hello from "./src/Hello";
import Zero from "./src/Zero";
import Github from "./src/Github";
function App() {
  

  
  return (
    <BrowserRouter>
        <nav>
            <Link to='/'>Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to= "/Menu">Menu</Link>
            <Link to='/Details'>Details</Link>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Details' element={<Details></Details>}>
            <Route index element={<Zero></Zero>}></Route>
            <Route path='Hello' element={<Hello></Hello>}></Route>
            <Route path='hi' element={<Hi></Hi>}></Route>
        </Route>
        <Route path='/Github/:name' element={<Github></Github>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
