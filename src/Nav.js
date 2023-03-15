import React from 'react';
import logo from "./LittleLemonLogo.jpg";

function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href="/public/index.html">Home</a></li>
                <li><a href="/public/index.html">About</a></li>
                <li><a href="/public/index.html">Menu</a></li>
                <li><a href="/public/index.html">Reservations</a></li>
                <li><a href="/public/index.html">Order Online</a></li>
                <li><a href="/public/index.html">Login</a></li>
            </ul>
        </nav>
    );
  }

  export default Nav;