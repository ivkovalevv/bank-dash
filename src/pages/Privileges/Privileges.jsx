import React from "react";
import './Privileges.css'
import PhotoProfile from "../../assets/img/pexels-christina-morillo.png";
import Header from "../../components/UI/Header/Header";

const Privileges = () => {
    return (
        <div className={"privileges-container"}>
            <Header title="My Privileges"></Header>
            <div className={'empty-container'}><h2>404</h2> page not found</div>
        </div>
    )
}

export default Privileges