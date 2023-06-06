import { useState, useEffect } from "react";
import Divider from "./Divider";
import { useCartContext } from "../context/cartContext";

import bottleImg from "../assets/bottle-shop-small.jpg";
import removeImg from "../assets/remove.svg";

import "./Cart.css";

export interface CartProps {
  open: boolean;
}

interface CartInterface {
  bottles: {
    name: string;
    capacity: string | undefined;
    quantity: number;
    price: number;
    totalSum: number;
  };
  boxes: {
    name: string;
    capacity: string | undefined;
    quantity: number;
    price: number;
    totalSum: number;
  };
}

export default function Cart({ open }: CartProps) {
  const {
    cart: { bottles, boxes },
    totalCartSum,
    updateOrder,
    calcTotalSumPerProduct,
    removeItem,
    resetOrder,
  } = useCartContext();
  const [bottleAmount, setBottleAmount] = useState(bottles.quantity);
  const [boxAmount, setBoxAmount] = useState(boxes.quantity);

  useEffect(() => {
    updateOrder(bottleAmount, "bottles");
    calcTotalSumPerProduct("bottles");
    updateOrder(boxAmount, "boxes");
    calcTotalSumPerProduct("boxes");
  }, [boxAmount, bottleAmount]);

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

      if (tempAmount < 0) {
        tempAmount = 0;
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

      if (tempAmount < 0) {
        tempAmount = 0;
      }

      return tempAmount;
    });
  }

  return (
    <div className={open ? "sidebar active" : "sidebar"}>
      <Divider />
      {bottles.quantity > 0 ? (
        <div className="product">
          <img src={bottleImg} alt="product image" className="product-img" />
          <div className="product-info">
            <div className="product-desc">
              <p className="product-name">Bottle</p>
              <p className="product-capacity">{`${bottles.capacity}L`}</p>
            </div>
            <div className="product-quantity">
              <button
                type="button"
                className="product-amount-btn"
                onClick={decreaseBottle}
              >
                -
              </button>
              <h2 className="amount">{bottles.quantity}</h2>
              <button
                type="button"
                className="product-amount-btn"
                onClick={increaseBottle}
              >
                +
              </button>
            </div>
          </div>
          <div className="product-actions">
            <p className="product-price">{`£${bottles.totalSum.toFixed(1)}`}</p>
            <button
              className="product-remove"
              onClick={() => removeItem("bottles")}
            >
              <img src={removeImg} alt="remove" />
            </button>
          </div>
        </div>
      ) : null}
      {boxes.quantity > 0 ? (
        <div className="product">
          <img src={bottleImg} alt="product image" className="product-img" />
          <div className="product-info">
            <div className="product-desc">
              <p className="product-name">{`Box (6 pcs)`}</p>
              <p className="product-capacity">{`${boxes.capacity}L`}</p>
            </div>
            <div className="product-quantity">
              <button
                type="button"
                className="product-amount-btn"
                onClick={decreaseBox}
              >
                -
              </button>
              <h2 className="amount">{boxes.quantity}</h2>
              <button
                type="button"
                className="product-amount-btn"
                onClick={increaseBox}
              >
                +
              </button>
            </div>
          </div>
          <div className="product-actions">
            <p className="product-price">{`£${boxes.totalSum.toFixed(1)}`}</p>
            <button
              className="product-remove"
              onClick={() => removeItem("boxes")}
            >
              <img src={removeImg} alt="remove" />
            </button>
          </div>
        </div>
      ) : null}
      <div className="checkout">
        <div className="checkout-summary">{`Place an order £${totalCartSum.toFixed(
          1
        )}`}</div>
        <button className="checkout-btn" onClick={resetOrder}>
          Checkout
        </button>
      </div>
      <Divider />
    </div>
  );
}
