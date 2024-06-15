import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/svg/Logo.svg"
import homesvg from "../../../assets/img/svg/home.svg"
import "./Navbar.css";

const Navbar = () => {
    function changeSelect(event){
        let target = event.target
        let parent = target.parentNode
        
        document.querySelectorAll('.navbar-item__link').forEach(el => {
            el.classList.remove('active')
        })
    
        if (target.tagName != 'A'){
            parent.classList.add('active')
        } else {
            target.classList.add('active')
        }

        close()
    }

    function close(){
        document.querySelector('.navbar').classList.remove('right');
        document.querySelector('.close').classList.remove('close-visible');
    }

    return (
        <div className={'navbar'}>
            <Link to="/dashboard" onClick={changeSelect}>
                <img src={Logo} className={'navbar-logo'}></img>
            </Link>
            <button className={'close'} onClick={close}>x</button>
            <ul className={'navbar-list'}>
                <li className={'navbar-item'}>
                    <Link to="/dashboard" className={'navbar-item__link link-dashboard'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-dashboard'}></div>
                        <p className={'navbar-item__text'}>
                            Dashboard
                        </p>
                        <div className="dashboard-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/transactions" className={'navbar-item__link link-transactions'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-transactions'}></div>
                        <p className={'navbar-item__text'}>
                            Transactions
                        </p>
                        <div className="transactions-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/accounts" className={'navbar-item__link link-accounts'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-accounts'}></div>
                        <p className={'navbar-item__text'}>
                            Accounts
                        </p>
                        <div className="accounts-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/investments" className={'navbar-item__link link-investments'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-investments'}></div>
                        <p className={'navbar-item__text'}>
                            Investments
                        </p>
                        <div className="investments-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/credit-cards" className={'navbar-item__link link-credit-cards'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-credit-cards'}></div>
                        <p className={'navbar-item__text'}>
                            Credit Cards
                        </p>
                        <div className="credit-cards-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/loans" className={'navbar-item__link link-loans'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-loans'}></div>
                        <p className={'navbar-item__text'}>
                            Loans
                        </p>
                        <div className="loans-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/services" className={'navbar-item__link link-services'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-services'}></div>
                        <p className={'navbar-item__text'}>
                            Services
                        </p>
                        <div className="services-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/my-privileges" className={'navbar-item__link link-my-privileges'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-my-privileges'}></div>
                        <p className={'navbar-item__text'}>
                            My Privileges
                        </p>
                        <div className="privileges-select"></div>
                    </Link>
                </li>
                <li className={'navbar-item'}>
                    <Link to="/setting" className={'navbar-item__link link-setting'} onClick={changeSelect}>
                        <div className={'navbar-item__logo item__logo-setting'}></div>
                        <p className={'navbar-item__text'}>
                            Setting
                        </p>
                        <div className="setting-select"></div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar