// src/Home.jsx
import React from "react"
import { Outlet,Link } from "react-router-dom"

export default function Details() {
  return( 
        
            <>  
                <nav>
                    <Link to="/Details">Details</Link>
                    <Link to="Hello">Hello</Link>
                    <Link to="Hi">Hi</Link>
                </nav>
                 <h1>These are your details</h1>
                 <Outlet></Outlet>
            </>
        );
}
