import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Composition from "../components/Composition";
import Footer from "../components/Footer";
import ImgComponent from "../components/ImgComponent";
import Divider from "../components/Divider";
import logo from "../assets/logo.jpg";
import { useAppContext } from "../context/context";

import "./Shop.css";

export default function Shop() {
  const {
    cart: { bottles, boxes },
    totalCartSum,
    updateCapacity,
    increaseBottle,
    increaseBox,
    decreaseBox,
    decreaseBottle,
  } = useAppContext();

  return (
    <main>
      <Banner />
      <div className="shop">
        <p className="shop-head">STILL</p>
        <p className="shop-head">WATER</p>
        <div className="capacity-btns">
          <button
            className={`${
              bottles.capacity === "0.3"
                ? "capacity-btn active"
                : "capacity-btn"
            }`}
            onClick={(e) =>
              updateCapacity(
                (e.target as HTMLElement).textContent?.slice(0, -1)
              )
            }
          >
            0.3L
          </button>
          <button
            className={`${
              bottles.capacity === "0.7"
                ? "capacity-btn active"
                : "capacity-btn"
            }`}
            onClick={(e) =>
              updateCapacity(
                (e.target as HTMLElement).textContent?.slice(0, -1)
              )
            }
          >
            0.7L
          </button>
          <button
            className={`${
              bottles.capacity === "1.0"
                ? "capacity-btn active"
                : "capacity-btn"
            }`}
            onClick={(e) =>
              updateCapacity(
                (e.target as HTMLElement).textContent?.slice(0, -1)
              )
            }
          >
            1.0L
          </button>
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
              <h2 className="amount">{bottles.quantity}</h2>
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
              <h2 className="amount">{boxes.quantity}</h2>
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
        <button className="cart-btn">
          <div className="cart-btn-items">
            <span>{`£${totalCartSum.toFixed(1)}`}</span>
            <span>Add to cart</span>
          </div>
        </button>
      </div>

      <ImgComponent link={logo} altText="logo" banner={false} />
      <Composition />
    </main>
  );
}
