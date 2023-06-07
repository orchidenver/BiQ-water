import * as React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export interface ModalProps {
  btnText?: string;
  open?: boolean;
  onClose: () => void;
}

export default function Modal({ btnText, open, onClose }: ModalProps) {
  const [cartEmailValue, setCartEmailValue] = useState<
    string | number | readonly string[] | undefined
  >("");

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    setCartEmailValue("");
  }

  if (!open) return null;
  return createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <p className="modal-head">Great choice! </p>
        <p className="modal-text">
          At the moment this product is out of stock. Please leave your email,
          and as soon as pure water flows into the bottles, we'll notify you
          first.
        </p>
        {/* <button className="modal-btn" onClick={onClose}>
          Stay tuned!
        </button> */}
        <button className="modal-btn-close" onClick={onClose}>
          ╳
        </button>
        <form className="modal-form" onSubmit={onSubmitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="modal-email"
            placeholder="Enter your email"
            value={cartEmailValue}
            onChange={(e) => setCartEmailValue(e.target.value)}
          />
          <button className="send-btn" type="submit" disabled={!cartEmailValue}>
            ᐳ
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")!
  );
}
