import React from "react";
import './Transactions.css'
import PhotoProfile from "../../assets/img/pexels-christina-morillo.png";
import Header from "../../components/UI/Header/Header";

const Transactions = () => {
    return (
            <div className={"transactions-container"}>
                <Header title="Transactions"></Header>
                <div class="section-transactions">
                  <div class="transactions-cards-block">
                      <div class="transactions-cards-line">
                        <h3 class="transactions-heading">My Cards</h3>
                        <botton class="transactions-btn">+ Add Card</botton>
                      </div>
                      <div className={'cards-transactions-container'}>
                          <div class="current-transactions-card"></div>
                          <div class="another-transactions-card"></div>
                      </div>
                  </div>
                  <div class="transactions-my-expense-block">
                    <h3 class="transactions-my-expense-heading">My Expense</h3>
                    <div class="transactions-my-expense-card"></div>
                  </div>
                  <div class="transactions-recent-transactions-block">
                    <h3 class="transactions-recent-transactions-heading">Recent Transactions</h3>
                    <div class="transactions-recent-transactions-actions">
                      <botton id="all" class="transactions-recent-transactions-actions-btn actions-btn-active">All Transactions</botton>
                      <botton id="income" class="transactions-recent-transactions-actions-btn">Income</botton>
                      <botton id="expense" class="transactions-recent-transactions-actions-btn">Expense</botton>
                    </div>
                    <div class="transactions-recent-transactions-card"></div>
                    <div class="transactions-recent-transactions-pages">
                      <button id="pages-btn-prev" class="transactions-recent-transactions-pages-btn">
                        <div class="transactions-recent-transactions-pages-btn-icon btn-icon-prev"></div>
                        <p class="transactions-recent-transactions-pages-btn-text">Previous</p>
                      </button>
                        <ul class="transactions-recent-transactions-pages-list">
                          <li class="transactions-recent-transactions-pages-item pages-item-active">1</li>
                          <li class="transactions-recent-transactions-pages-item">2</li>
                          <li class="transactions-recent-transactions-pages-item">3</li>
                          <li class="transactions-recent-transactions-pages-item">4</li>
                        </ul>
                      <button id="pages-btn-prev" class="transactions-recent-transactions-pages-btn">
                        <p class="transactions-recent-transactions-pages-btn-text">Next</p>
                        <div class="transactions-recent-transactions-pages-btn-icon btn-icon-next"></div>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
    )
}

export default Transactions