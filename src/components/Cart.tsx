import { useState, useEffect } from "react";
import Divider from "./Divider";
import { useAppContext } from "../context/context";
import Modal from "./Modal";

import bottleImg from "../assets/bottle-shop.jpg";
import boxImg from "../assets/box-shop-small.jpg";
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
    removeItem,
    increaseBottle,
    increaseBox,
    decreaseBox,
    decreaseBottle,
    lang,
  } = useAppContext();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className={open ? "sidebar active" : "sidebar"}>
      <Divider />
      {bottles.quantity > 0 ? (
        <>
          <div className="product">
            <div className="img-container">
              <img
                src={bottleImg}
                alt="product image"
                className="product-img bottle"
              />
            </div>
            <div className="product-info">
              <div className="product-desc">
                <p
                  className="product-name"
                  // style={{ fontSize: lang === "ENG" ? "16px" : "11px" }}
                >
                  {lang === "ENG" ? "Bottle" : "Butelka"}
                </p>
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
              <p className="product-price">{`${bottles.totalSum.toFixed(
                1
              )} zł`}</p>
              <button
                className="product-remove"
                onClick={() => removeItem("bottles")}
              >
                <img src={removeImg} alt="remove" />
              </button>
            </div>
          </div>
          <Divider />
        </>
      ) : null}
      {boxes.quantity > 0 ? (
        <>
          <div className="product">
            <div className="img-container">
              <img src={boxImg} alt="product image" className="product-img" />
            </div>
            <div className="product-info">
              <div className="product-desc">
                <p
                  className="product-name"
                  // style={{ fontSize: lang === "ENG" ? "16px" : "11px" }}
                >
                  {lang === "ENG" ? (
                    <span>Box 9pcs</span>
                  ) : (
                    <>
                      <span>Opakowanie</span>
                      <br />
                      <span>9szt.</span>
                    </>
                  )}
                </p>
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
              <p className="product-price">{`${boxes.totalSum.toFixed(
                1
              )} zł`}</p>
              <button
                className="product-remove"
                onClick={() => removeItem("boxes")}
              >
                <img src={removeImg} alt="remove" />
              </button>
            </div>
          </div>
          <Divider />
        </>
      ) : null}
      <div className="checkout">
        <div className="checkout-summary">{`${
          lang === "ENG" ? "Place an order" : "Złóż zamówienie"
        } ${totalCartSum.toFixed(1)} zł`}</div>
        <button
          className="checkout-btn"
          onClick={() => {
            setOpenModal(true);
          }}
          disabled={bottles.quantity === 0 && boxes.quantity === 0}
        >
          {lang === "ENG" ? "Checkout" : "Przejdź do kasy"}
        </button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
