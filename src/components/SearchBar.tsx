import React from "react";
import '../styles/SearchBar.css';
import gps from '../assets/gps.png'

function SearchBar() {
    return (
        <div className="search-bar-wrapper">
            <img className="gps-icon" src={gps}></img>
            <input className="search-input" placeholder="위치를 검색하세요."></input>
        </div>
    );
}

export default SearchBar;