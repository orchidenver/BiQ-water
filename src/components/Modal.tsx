import * as React from "react";

import "./Modal.css";

export interface ModalProps {}

export default function Modal(props: ModalProps) {
  return (
    <div className="modal">
      <p className="modal-head">Great choice! </p>
      <p className="modal-text">
        At the moment this product is out of stock. Please leave your email, and
        as soon as pure water flows into the bottles, we'll notify you first.
      </p>
      <button className="modal-btn">Stay tuned!</button>
      {/* <form className="modal-form">
        <label htmlFor="">Email</label>
        <input type="email" className="modal-email" />
        <button>Send</button>
      </form> */}
    </div>
  );
}
