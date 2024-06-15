import React from "react";
import "./Dashboard.css";
import TransferPhoto1 from "../../assets/img/pexels-julia-volk-1.png";
import TransferPhoto2 from "../../assets/img/marcel-strauss-unsplash-2.png";
import TransferPhoto3 from "../../assets/img/emanuel-minca-unsplash-3.png";
import Header from "../../components/UI/Header/Header";

const Dashboard = () => {
    return (
        <div className={'overview-container'}>
            <Header title="Overview"></Header>
            {<div className="section-overview">
                <div className="overview-cards-block">
                    <div className="overview-cards-line">
                        <h3 className="overview-heading">My Cards</h3>
                        <botton className="overview-btn">See All</botton>
                    </div>
                    <div className={'cards-container'}>
                        <div className="current-overview-card"></div>
                        <div className="another-overview-card"></div>
                    </div>
                </div>
                <div className="overview-transaction-block">
                    <h3 className="overview-heading block-heading">Recent Transaction</h3>
                    <div className="transaction-card"></div>
                </div>
                <div className="overview-weekly-activity-block">
                    <h3 className="overview-heading block-heading">Weekly Activity</h3>
                    <div className="weekly-activity-card"></div>
                </div>
                <div className="overview-expense-statistics-block">
                    <h3 className="overview-heading block-heading">Expense Statistics</h3>
                    <div className="expense-statistics-card"></div>
                </div>
                <div className="overview-quick-transfer-block">
                    <h3 className="overview-heading block-heading">Quick Transfer</h3>
                    <div className="quick-transfer-card">
                        <ul className="quick-transfer-card__list">
                            <li className="quick-transfer-card__item">
                                <img src={TransferPhoto1} className="card__item-img"></img>
                                <h4 className="card__item-name"><b>Livia Bator</b></h4>
                                <p className="card__item-post"><b>CEO</b></p>
                            </li>
                            <li className="quick-transfer-card__item">
                                <img src={TransferPhoto2} className="card__item-img"></img>
                                <h4 className="card__item-name">Randy Press</h4>
                                <p className="card__item-post">Director</p>
                            </li>
                            <li className="quick-transfer-card__item">
                                <img src={TransferPhoto3} className="card__item-img"></img>
                                <h4 className="card__item-name">Workman</h4>
                                <p className="card__item-post">Designer</p>
                            </li>
                        </ul>
                        <button className="quick-transfer-card__list-btn"></button>
                        <div className="quick-transfer-card__amount-line">
                            <p className="quick-transfer-card__amount-line-text">Write Amount</p>
                            <div className="card__amount-form">
                                <input type="number" min={0} className="card__amount-input" placeholder="525.50"></input>
                                <button className="card__amount-form-btn">
                                    <p className="card__amount-form-btn-text">Send</p>
                                    <div className="card__amount-form-btn-icon"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview-balance-history-block">
                    <h3 className="overview-heading block-heading">Balance History</h3>
                    <div className="balance-history-card"></div>
                </div>
              </div>}
        </div>
    )
}

export default Dashboard