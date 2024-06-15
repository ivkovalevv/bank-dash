import React from "react";
import './Loans.css'
import PhotoProfile from "../../assets/img/pexels-christina-morillo.png";
import Header from "../../components/UI/Header/Header";

const Loans = () => {
    return (
        <div className={"loans-container"}>
            <Header title="Loans"></Header>
            <div className={'empty-container'}><h2>404</h2> page not found</div>
        </div>
    )
}

export default Loans