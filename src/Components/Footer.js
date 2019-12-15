import React from "react";
import car from "../assets/car.png";
import lock from "../assets/lock.png";
import mpesa from "../assets/mpesa.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import equitel from "../assets/equitel.png";
import skygardenlogo from "../assets/skygardenlogo.png";
import playstore from "../assets/playstore.png";
import returns from "../assets/returns.png";

const Footer = () => (
  <>
    <div className='footer'>
      <div className='upper-content'>
        <div className='upper-content-items'>
          <span className='text'>Get</span>
          <span className='logo'>
            <img src={skygardenlogo} alt='logo' />
          </span>
          <span className='text'>App.</span>
          <br />
          <br />
          <br />
          <span className='text'>It's Free!</span>
        </div>
        <div className='upper-content-image'>
          <img src={playstore} width='190' alt='playstore' />
        </div>
      </div>
      <div className='lower-content'>
        <div className='container'>
          <div className='company'>
            <h3>COMPANY</h3>
            <ul>
              <li>About Us</li>
              <li>Sell with Sky.Garden</li>
              <li>Sky.Garden Blog</li>
              <li>Returns& Exchange</li>
            </ul>
          </div>
          <div className='follow-us'>
            <h3>FOLLOW OUR NEWS</h3>
            <ul>
              <li>
                <i className='fa fa-facebook'></i> Facebook
              </li>
              <li>
                <i className='fa fa-instagram'></i> Instagram
              </li>
              <li>
                <i className='fa fa-linkedin'></i> LinkedIn
              </li>
            </ul>
          </div>

          <div className='shopping-with-us'>
            <h3>SHOPPING WITH US IS EASY</h3>
            <ul>
              <li>
                {" "}
                <span className='list-image'>
                  <img src={car} className='footer-icon' alt='car' />
                </span>
                Same day delivery
              </li>
              <li>
                <span className='list-image'>
                  <img src={lock} className='footer-icon' alt='lock' />
                </span>
                Secure payment online or on delivery
              </li>
              <li>
                <span className='list-image'>
                  <img
                    src={returns}
                    className='footer-icon-returns'
                    alt='returns'
                  />
                </span>
                Free returns
              </li>
            </ul>
          </div>
          <div className='contact-us'>
            <h3>CONTACT US</h3>

            <ul>
              <li>FAQ Centers</li>
              <li className='list-email'>hello@sky.garden</li>
              <li>5th Floor Senteu Plaza Nairobi Kenya</li>
            </ul>
          </div>

          <div className='sub-footer'>
            <div className='copyright'>&copy; Sky.Garden, 2019</div>
            <div className='policy'>Privacy Policy | Terms and Conditions</div>
            <div className='payments'>
              <img src={mpesa} className='footer-icon' alt='mpesa' />
              <img src={equitel} className='footer-icon' alt='equitel' />
              <img src={visa} className='footer-icon' alt='visa' />
              <img src={mastercard} className='footer-icon' alt='mastercard' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Footer;
