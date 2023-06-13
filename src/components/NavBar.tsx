import { useState } from "react";
import Cart from "./Cart";
import { useAppContext } from "../context/context";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo-small.svg";
import logon from "../assets/Logo_BiQ-new.svg";
import shop from "../assets/shop.svg";
import close from "../assets/close.svg";
import arrow from "../assets/arrow-down.svg";

export interface NavBar {}

export default function NavBar(props: NavBar) {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { changeLang, lang, cartVisible, openCart } = useAppContext();

  function menuHandler() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="btn-block" onClick={menuHandler}>
          <button className="lang-btn">{lang}</button>
          <img className="arrow" src={arrow} alt="lang menu" />
        </div>
        {!menuOpen ? null : (
          <div className="lang-menu" onClick={menuHandler}>
            <div className="lang" onClick={(e) => changeLang(e)}>
              ENG
            </div>
            <div className="lang" onClick={(e) => changeLang(e)}>
              PL
            </div>
          </div>
        )}
        <Link to="/" className="navbar-logo">
          <img src={logon} alt="logo" />
        </Link>
        <button className="cart" onClick={openCart}>
          <img
            className="cart-img"
            src={!cartVisible ? shop : close}
            alt="cart"
            style={{
              height: !cartVisible ? "3vh" : "2vh",
            }}
          />
        </button>
      </nav>
      <Cart open={cartVisible} />
    </div>
  );
}
