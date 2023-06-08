import * as React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./CookiesModal.css";

export default function CookiesModal() {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  function giveCookieConsent() {
    setCookies("cookieConsent", true, { path: "/" });
  }

  return createPortal(
    <aside className="cookies">
      <p className="cookies-header">Accept Cookies Notification</p>
      <p className="cookies-text">
        This website uses cookies to enhance your browsing experience and
        provide personalized services. By continuing to browse this site, you
        consent to the use of cookies in accordance with our Cookie Policy.
      </p>
      {/* <p className="cookies-text">
        By clicking "Accept Cookies" or continuing to use our website, you
        acknowledge that you have read, understood, and agreed to the terms of
        our Cookie Policy. If you do not consent to the use of cookies, please
        adjust your browser settings accordingly or refrain from using our
        website.
      </p>
      <p className="cookies-text">
        For more information about cookies and how we use them, please read our
        Cookie Policy.
      </p>
      <p className="cookies-text">
        Thank you for your understanding and cooperation.
      </p> */}
      <Link className="cookies-ref" to="cookies">
        Learn more
      </Link>
      <div className="cookies-btns">
        <button className="cookies-btn" onClick={giveCookieConsent}>
          Reject All
        </button>
        <button className="cookies-btn color" onClick={giveCookieConsent}>
          Accept All
        </button>
      </div>
    </aside>,
    document.getElementById("cookies")!
  );
}
