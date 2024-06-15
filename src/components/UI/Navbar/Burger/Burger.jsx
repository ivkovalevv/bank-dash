import React from "react";
import "./Burger.css";

const Burger = () =>{
    const clickBurger = () =>{
        document.querySelector('.navbar').classList.toggle('right');
        document.querySelector('.close').classList.add('close-visible')
    }

    return (
        <button id="burger" className={"burger"} onClick={clickBurger}></button>
    )
}

export default Burger