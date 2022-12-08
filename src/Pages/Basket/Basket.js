import React from 'react'
import "./Basket.css"
// import ScrollToTop from "react-scroll-to-top";
import topIcon from "../../Assets/Icons/Scroll To Top Arrow.svg"
import { BasketProducts } from '../../Companents/BasketProducts/BasketProducts'


export function Basket() {

  return (
    <div id='basket-main-container'>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        id='scroll-to-top-basket'>
        <img src={topIcon} alt="" />
      </div>
      <BasketProducts />
      {/* <ScrollToTop style={{ color: "white" }} smooth id='catalog-scroll-to-top' /> */}
      <div></div>
    </div>
  )
}
