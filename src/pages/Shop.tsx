import { useState } from "react";
import Banner from "../components/Banner";
import Composition from "../components/Composition";
import Footer from "../components/Footer";
import ImgComponent from "../components/ImgComponent";
import Divider from "../components/Divider";
import logo from "../assets/logo.jpg";

import "./Shop.css";

export default function Shop() {
  const [bottleAmount, setBottleAmount] = useState(1);
  const [boxAmount, setBoxAmount] = useState(1);

  function increaseBottle() {
    setBottleAmount((prevState) => {
      let tempAmount = prevState + 1;

      if (tempAmount > 9) {
        tempAmount = 9;
      }

      return tempAmount;
    });
  }

  function decreaseBottle() {
    setBottleAmount((prevState) => {
      let tempAmount = prevState - 1;

      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  }

  function increaseBox() {
    setBoxAmount((prevState) => {
      let tempAmount = prevState + 1;

      if (tempAmount > 9) {
        tempAmount = 9;
      }

      return tempAmount;
    });
  }

  function decreaseBox() {
    setBoxAmount((prevState) => {
      let tempAmount = prevState - 1;

      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  }

  return (
    <main>
      <Banner />
      <div className="shop">
        <p className="shop-head">STILL</p>
        <p className="shop-head">WATER</p>
        <div className="capacity-btns">
          <button className="capacity-btn">0.3L</button>
          <button className="capacity-btn">0.7L</button>
          <button className="capacity-btn">1.0L</button>
        </div>
        <div className="shop-items">
          <div className="shop-item">
            <p className="shop-product">Bottle</p>
            <p className="shop-price">£1.6</p>
            <div className="shop-count">
              <button
                type="button"
                className="amount-btn"
                onClick={decreaseBottle}
              >
                -
              </button>
              <h2 className="amount">{bottleAmount}</h2>
              <button
                type="button"
                className="amount-btn"
                onClick={increaseBottle}
              >
                +
              </button>
            </div>
          </div>
          <Divider color="#000000" margin="20px 0" />
          <div className="shop-item">
            <p className="shop-product">
              Box <span>(6 pcs)</span>
            </p>
            <p className="shop-price">£9.6</p>
            <div className="shop-count">
              <button
                type="button"
                className="amount-btn"
                onClick={decreaseBox}
              >
                -
              </button>
              <h2 className="amount">{boxAmount}</h2>
              <button
                type="button"
                className="amount-btn"
                onClick={increaseBox}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <ImgComponent link={logo} altText="logo" banner={false} />
      <Composition />
      <Footer />
    </main>
  );
}
