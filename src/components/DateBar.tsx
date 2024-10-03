import React from "react";
import '../styles/DateBar.css';
import leftArrow from '../assets/left.png';
import rightArrow from '../assets/right.png';

function DateBar() {
    return (
        <div className="date-bar-wrapper">
            <img className="left-arrow" src={leftArrow}></img>
            <div className="date">
                <span className="yesterday">어어어제</span>
                <span className="date">09/25</span>
            </div>
            <img className="right-arrow" src={rightArrow}></img>
        </div>
    );
}

export default DateBar;