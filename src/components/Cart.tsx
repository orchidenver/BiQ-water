import Divider from "./Divider";

import bottleImg from "../assets/bottle-shop-small.jpg";
import removeImg from "../assets/remove.svg";

import "./Cart.css";

export interface CartProps {
  open: boolean;
}

export default function Cart({ open }: CartProps) {
  return (
    <div className={open ? "sidebar active" : "sidebar"}>
      <Divider />
      <div className="product">
        <img src={bottleImg} alt="product image" className="product-img" />
        <div className="product-info">
          <div className="product-desc">
            <p className="product-name">Still water</p>
            <p className="product-capacity">0.3L</p>
          </div>
          <div className="product-quantity">
            <button type="button" className="product-amount-btn">
              -
            </button>
            <h2 className="amount">4</h2>
            <button type="button" className="product-amount-btn">
              +
            </button>
          </div>
        </div>
        <div className="product-actions">
          <p className="product-price">£16</p>
          <button className="product-remove">
            <img src={removeImg} alt="remove" />
          </button>
        </div>
      </div>
      <div className="checkout">
        <div className="checkout-summary">Place an order £16 </div>
        <button className="checkout-btn">Checkout</button>
      </div>
      <Divider />
    </div>
  );
}
