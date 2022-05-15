import React from "react";
import '../styles/navbar.css'
export default function Navbar(){
    return(
        <header id="nav-bar">
            <h2 id="logo"><a href="">Anudeep Reddy Ramireddy</a></h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}