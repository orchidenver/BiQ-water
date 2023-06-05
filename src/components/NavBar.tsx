import { useState } from "react";
import Cart from "./Cart";
import "./NavBar.css";
import logo from "../assets/logo-small.svg";
import shop from "../assets/shop.svg";
import close from "../assets/close.svg";

export interface NavBar {}

export default function NavBar(props: NavBar) {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <button
          className="cart"
          onClick={() => setMenuVisible((prevState) => !prevState)}
        >
          <img
            className="cart-img"
            src={!menuVisible ? shop : close}
            alt="cart"
          />
        </button>
      </nav>
      <Cart open={menuVisible} />
    </div>
  );
}
