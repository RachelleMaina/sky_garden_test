import React from "react";
import discountcircle from "../assets/discountcircle.png";
import shoppinglady from "../assets/shoppinglady.png";
import blackbubble from "../assets/blackbubble.png";
import discountline from "../assets/discountline.png";

const Banner = () => (
  <>
    <div className='navbar'></div>

    <div className='banner'>
      <div className='banner-wrapper'>
        <div className='left-text'>
          <h2>HOT holiday deals</h2>
          <p>
            Sky. Garden loves all the fathers and knows you need some help in
            choosing something special. Here is few of the sweet things we found
            and you might like.
          </p>
          <h3>Deal expires in 01 : 13 : 12 hrs</h3>
        </div>
        <div className='right-image-group'>
          <img src={shoppinglady} alt='shopping lady'></img>

          <div className='discount-item-group'>
            <img src={discountcircle} alt='discount circle'></img>
            <div className='discount-text'>
              -10%
              <img src={discountline} alt='discount line'></img>
            </div>
          </div>
          <div className='blackbubble-item-group'>
            <img src={blackbubble} alt='black bubble'></img>
            <span className='blackbubble-text-first'>DELIVERY</span>
            <span className='blackbubble-text-second'>SAME DAY!</span>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Banner;
