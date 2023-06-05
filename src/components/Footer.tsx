import * as React from "react";
import Divider from "./Divider";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact us</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your e-mail" />
        <label htmlFor="question">Question</label>
        <textarea
          name="question"
          id="question"
          placeholder="Enter your question"
          cols={30}
          rows={7}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
      <Divider color="#ffffff" margin="20px 0" />
      <p className="footer-head">Be quality water</p>
      <Divider color="#ffffff" margin="20px 0" />
      <p className="ref">BiQ © 2023</p>
      <p className="ref">All rights reserved.</p>
      <p className="ref">Privacy Policy. Cookie Policy.</p>
    </footer>
  );
}
