import React from "react";
import './CreditCards.css'
import Header from "../../components/UI/Header/Header";

const CreditCards = () => {
    return (
            <div className={"credit-cards-container"}>
              <Header title="Credit Cards"></Header>
              <div class="section-credit">
              <div class="credit-cards-block">
                  <div class="credit-cards-line">
                    <h3 class="credit-heading">My Cards</h3>
                  </div>
                  <div className={'cards-credit-container'}>
                      <div class="current-credit-card"></div>
                      <div class="second-credit-card"></div>
                      <div class="another-credit-card"></div>
                  </div>
              </div>
              <div class="credit-expense-statistics-block">
                <h3 class="credit-expense-statistics-heading">Card Expense Statistics</h3>
                <div class="credit-expense-statistics-card"></div>
              </div>
              <div class="credit-card-list-block">
                  <h3 class="credit-card-list-heading">Card List</h3>
                  <ul class="credit-card-list">
                    <li class="credit-card-list-item"></li>
                    <li class="credit-card-list-item"></li>
                    <li class="credit-card-list-item"></li>
                  </ul>
              </div>
              <div class="credit-add-new-block">
                <h3 class="credit-add-new-heading">Add New Card</h3>
                <div class="credit-add-new-card">
                  <p class="add-new-card-description">Credit Card generally means a plastic card issued by Scheduled Commercial<br className="new-br"/> Banks assigned to a Cardholder, with a credit limit, that can be used to<br/> purchase goods and services on credit or obtain cash advances.</p>
                  <form action="#" method="get" class="add-new-card-form">
                    <div class="add-new-card-input-block">
                      <label for="input-classic" class="add-new-card-form-input-label">Card Type</label>
                    <input id="input-classic" type="text" class="add-new-card-form-input" placeholder="Classic"/>
                    </div>
                    <div class="add-new-card-input-block">
                      <label for="input-cards" class="add-new-card-form-input-label">Name On Card</label>
                    <input id="input-cards" type="text" class="add-new-card-form-input" placeholder="My Cards"/>
                    </div>
                    <div class="add-new-card-input-block">
                      <label for="input-card-num" class="add-new-card-form-input-label">Card Number</label>
                    <input id="input-card-num" type="number" class="add-new-card-form-input" placeholder="**** **** **** ****"/>
                    </div>
                    <div class="add-new-card-input-block">
                      <label for="input-date" class="add-new-card-form-input-label">Expiration Date</label>
                    <input id="input-date" type="date" class="add-new-card-form-input" placeholder="25 January 2025"/>
                    </div>
                    <button class="add-new-card-form-btn">Add Card</button>
                  </form>
                </div>
              </div>
              <div class="credit-card-setting-block">
                <h3 class="credit-card-setting-heading">Card Setting</h3>
                <ul class="credit-card-setting-card">
                  <li class="credit-card-setting-card-item">
                    <div class="setting-card-item-icon card-item-icon-1"></div>
                    <div class="setting-card-item-text">
                      <h4 class="setting-card-item-heading">Block Card</h4>
                      <p class="setting-card-item-description">Instantly block your card</p>
                    </div>
                  </li>
                  <li class="credit-card-setting-card-item">
                    <div class="setting-card-item-icon card-item-icon-2"></div>
                    <div class="setting-card-item-text">
                      <h4 class="setting-card-item-heading">Change Pic Code</h4>
                      <p class="setting-card-item-description">Withdraw without any card</p>
                    </div>
                  </li>
                  <li class="credit-card-setting-card-item">
                    <div class="setting-card-item-icon card-item-icon-3"></div>
                    <div class="setting-card-item-text">
                      <h4 class="setting-card-item-heading">Add to Google Pay</h4>
                      <p class="setting-card-item-description">Withdraw without any card</p>
                    </div>
                  </li>
                  <li class="credit-card-setting-card-item">
                    <div class="setting-card-item-icon card-item-icon-4"></div>
                    <div class="setting-card-item-text">
                      <h4 class="setting-card-item-heading">Add to Apple Pay</h4>
                      <p class="setting-card-item-description">Withdraw without any card</p>
                    </div>
                  </li>
                  <li class="credit-card-setting-card-item">
                    <div class="setting-card-item-icon card-item-icon-5"></div>
                    <div class="setting-card-item-text">
                      <h4 class="setting-card-item-heading">Add to Apple Store</h4>
                      <p class="setting-card-item-description">Withdraw without any card</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>  
  
            </div>
    )
}

export default CreditCards