import React from "react";
import './Investments.css'
import PhotoProfile from "../../assets/img/pexels-christina-morillo.png";
import TIA from "../../assets/img/svg/TIA.svg";
import NOI from "../../assets/img/svg/NOI.svg";
import ROR from "../../assets/img/svg/ROR.svg";
import Header from "../../components/UI/Header/Header";

const Investments = () => {
    return (
      <div className={'investments-container'}>
            <Header title="Investments"></Header>
            <div class="section-investments">
            <ul class="section-investments-list">
              <li class="section-investments-list-item">
                <div class="section-investments-list-item-img investments-list-item-img-1">
                  <img src={TIA} class="list-item-img"/>
                </div>
                <div class="section-investments-list-item-content">
                  <h4 class="list-item-content-text">Total Invested Amount</h4>
                  <p class="list-item-content-price"><b>$150,000</b></p>
                </div>
              </li>
              <li class="section-investments-list-item">
                <div class="section-investments-list-item-img investments-list-item-img-2">
                  <img src={NOI} class="list-item-img"/>
                </div>
                <div class="section-investments-list-item-content">
                  <h4 class="list-item-content-text">Number of Investments</h4>
                  <p class="list-item-content-price"><b>1,250</b></p>
                </div>
              </li>
              <li class="section-investments-list-item">
                <div class="section-investments-list-item-img investments-list-item-img-3">
                  <img src={ROR} class="list-item-img"/>
                </div>
                <div class="section-investments-list-item-content">
                  <h4 class="list-item-content-text">Rate of Return</h4>
                  <p class="list-item-content-price"><b>+5.80%</b></p>
                </div>
              </li>
            </ul>
            <div class="investments-yearly-total-block">
                <h3 class="investments-yearly-total-heading">Yearly Total Investment</h3>
                <div class="investments-yearly-total-card"></div>
            </div>
            <div class="investments-monthly-revenue-block">
                <h3 class="investments-monthly-revenue-heading">Monthly Revenue</h3>
                <div class="investments-monthly-revenue-card"></div>
            </div>
            <div class="investments-my-investment-block">
                <h3 class="investments-my-investment-heading">My Investment</h3>
                <ul class="investments-my-investment-list">
                  <li class="investments-my-investment-item my-investment-item-1"></li>
                  <li class="investments-my-investment-item my-investment-item-2"></li>
                  <li class="investments-my-investment-item my-investment-item-3"></li>
                </ul>
            </div>
            <div class="investments-trending-block">
                <h3 class="investments-trending-heading">Trending Stock</h3>
                <div class="investments-trending-card"></div>
            </div>
          </div>  
</div> 
    )
}

export default Investments