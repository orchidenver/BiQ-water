import { useState } from "react";
import Cart from "./Cart";
import { useAppContext } from "../context/context";
import "./NavBar.css";
import logo from "../assets/logo-small.svg";
import shop from "../assets/shop.svg";
import close from "../assets/close.svg";

export interface NavBar {}

export default function NavBar(props: NavBar) {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { changeLang, lang } = useAppContext();

  function menuHandler() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="wrapper">
      <nav className="navbar">
        {!menuOpen ? (
          <button className="lang-btn" onClick={menuHandler}>
            {lang}
          </button>
        ) : (
          <div className="lang-menu" onClick={menuHandler}>
            <div className="lang" onClick={(e) => changeLang(e)}>
              ENG
            </div>
            <div className="lang" onClick={(e) => changeLang(e)}>
              PL
            </div>
          </div>
        )}
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
