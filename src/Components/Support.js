import React from "react";
import btnbox from "../assets/btnbox.png";

const Support =()=>(
    <div className='body-wrapper'>
    <div className='live-chat'>
      <div className='live-chat-text'>
        <span className='title'>Customer Care</span>
        <span className='phone item'>+254 718 222 111</span>
        <span className='email item'>support@sky.garden</span>
        <span className='weekdays item'>Mon - Fri: 8 am - 8 pm</span>
        <span className='weekends item'>Sat - sun: 9 am - 5 pm</span>
        <img
          className='btn-box'
          src={btnbox}
          alt='btnbox'
          height='57'
        ></img>
        <div className='btn-content'>
          Start Live Chat <i className='fa fa-angle-right'></i>
        </div>
      </div>
    </div>
    <div className='open-shop'>
      <div className='open-shop-text'>
        <span className='title'>Ready to Sell?</span>
        <span className='instructions item'>
          Open your free shop and start selling in 5 min!
        </span>
        <img
          className='btn-box'
          src={btnbox}
          alt='btnbox'
          height='57'
        ></img>
        <div className='btn-content'>
          Open Your Shop <i className='fa fa-angle-right'></i>
        </div>
      </div>
    </div>
  </div>
);
export default Support;