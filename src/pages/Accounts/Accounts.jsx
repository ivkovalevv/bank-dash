import React from "react";
import './Accounts.css'
import PhotoProfile from "../../assets/img/pexels-christina-morillo.png";
import MyBalanceIcon from "../../assets/img/svg/MyBalanceIcon.svg";
import IncomeIcon from "../../assets/img/svg/Income.svg";
import ExpenseIcon from "../../assets/img/svg/Expense.svg";
import Total from "../../assets/img/svg/Total.svg";
import Header from "../../components/UI/Header/Header";

const Accounts = () => {
    return (
          <div className={'accounts-container'}>
            <Header title="Accounts"></Header>
              <div class="section-accounts">
              <ul class="section-accounts-list">
                <li class="section-accounts-list-item">
                  <div class="section-accounts-list-item-img accounts-list-item-img-1">
                    <img src={MyBalanceIcon} class="list-item-img"/>
                  </div>
                  <div class="section-accounts-list-item-content">
                    <h4 class="list-item-content-text">My Balance</h4>
                    <p class="list-item-content-price"><b>$12,750</b></p>
                  </div>
                </li>
                <li class="section-accounts-list-item">
                  <div class="section-accounts-list-item-img accounts-list-item-img-2">
                    <img src={IncomeIcon} class="list-item-img"/>
                  </div>
                  <div class="section-accounts-list-item-content">
                    <h4 class="list-item-content-text">Income</h4>
                    <p class="list-item-content-price"><b>$5,600</b></p>
                  </div>
                </li>
                <li class="section-accounts-list-item">
                  <div class="section-accounts-list-item-img accounts-list-item-img-3">
                    <img src={ExpenseIcon} class="list-item-img"/>
                  </div>
                  <div class="section-accounts-list-item-content">
                    <h4 class="list-item-content-text">Expense</h4>
                    <p class="list-item-content-price"><b>$3,460</b></p>
                  </div>
                </li>
                <li class="section-accounts-list-item">
                  <div class="section-accounts-list-item-img accounts-list-item-img-4">
                    <img src={Total} class="list-item-img"/>
                  </div>
                  <div class="section-accounts-list-item-content">
                    <h4 class="list-item-content-text">Total Saving</h4>
                    <p class="list-item-content-price"><b>$7,920</b></p>
                  </div>
                </li>
              </ul>
              <div class="accounts-last-transaction-block">
                  <h3 class="accounts-last-transaction-heading">Last Transaction</h3>
                  <div class="accounts-last-transaction-card"></div>
              </div>
              <div class="accounts-cards-block">
                  <div class="accounts-cards-line">
                    <h3 class="accounts-heading">My Card</h3>
                    <botton class="accounts-btn">See All</botton>
                  </div>
                  <div class="current-accounts-card"></div>
              </div>
              <div class="accounts-debit-block">
                  <h3 class="accounts-debit-heading">Debit & Credit Overview</h3>
                  <div class="accounts-debit-card"></div>
              </div>
              <div class="accounts-invoices-block">
                  <h3 class="accounts-invoices-heading">Invoices Sent</h3>
                  <div class="accounts-invoices-card"></div>
              </div>
            </div>
          </div>
    )
}

export default Accounts