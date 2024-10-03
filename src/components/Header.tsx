import React from "react";
import '../styles/Header.css';
import Logo from '../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <img className="logo" src={Logo}></img>
            <div className="title">어제 날씨</div>
        </div>
    );
}

export default Header;