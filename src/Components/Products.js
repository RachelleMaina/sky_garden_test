import React from "react";
import Image from "react-image-resizer";
import Loader from "react-loader-spinner";
import exclamation from "../assets/exclamation.svg";
import { offerBenefit, formatPrice } from "../utils";

const Products = ({ data, error }) =>
  data && data.value ? (
    <>
      <div className='container'>
        <div className='card-wrapper'>
          {data.value.slice(0, 12).map(item => (
            <div className='card' key={item.title}>
              <div className='card-top-label'>-{item.offer_benefit_value}%</div>
              <div className='item-wrapper'>
                <div className='image'>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    height={240}
                    width={200}
                  />
                </div>
                <div className='item-details'>
                  <span className='description'>
                    {item.title.length > 50 ? (
                      <span>{item.title.substring(0, 50)}...</span>
                    ) : (
                      item.title
                    )}
                  </span>
                  <span className='name'>{item.partner_name}</span>
                  <span className='price'>
                    {formatPrice(
                      offerBenefit(
                        item.stock_record_price_retail,
                        item.offer_benefit_value,
                      ),
                    )}{" "}
                    {item.stock_record_price_currency}
                  </span>
                  &nbsp; &nbsp;
                  <span className='discount'>
                    {" "}
                    {formatPrice(item.stock_record_price_retail)}{" "}
                    {item.stock_record_price_currency}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='load-more'>
        <button className='btn'>LOAD MORE</button>
      </div>
    </>
  ) : error ? (
    <div className='error'>
      <img src={exclamation} alt='exclamation' height='17' width='17'></img>{" "}
      Please Check Your Network and Try Again.
    </div>
  ) : (
    <div className='loader'>
      {" "}
      <Loader
        type='ThreeDots'
        color='#55D187'
        height={100}
        width={100}
        timeout={30000}
      />
    </div>
  );
export default Products;
