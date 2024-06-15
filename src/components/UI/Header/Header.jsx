import React from "react";
import "./Header.css";
import PhotoProfile from "../../../assets/img/pexels-christina-morillo.png";
import Burger from "../Navbar/Burger/Burger";

const Header = (props) => {
    return (
        <div className={'header-container'}>
            <div className="header">
              <div className={"container"}>
                <Burger></Burger>
                <h2 className="header-heading">{props.title}</h2>
                <div className="header-actions">
                    <div className="header-actions__input">
                        <input id="search" type="text" placeholder="Search for something" className="header-actions__search"/>
                    </div>
                    <button id="settings" className="header-actions__btn-settings"></button>
                    <button id="notifications" className="header-actions__btn-notifications"></button>
                </div>
                <div className="header-user">
                    <img src={PhotoProfile} className="header-user-img"></img>
                </div>
              </div>
            </div>
    </div>
    )
}

export default Header