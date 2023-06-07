import * as React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonInterface {
  children: string | JSX.Element;
  width: number | string;
  height: number | string;
  component?: string;
}

export default function Button({
  children,
  width,
  component,
  height,
}: ButtonInterface) {
  return (
    <Link
      to="shop"
      className={`button ${component ? "button-banner" : null}`}
      style={{ width: width, height: height }}
    >
      {children}
    </Link>
  );
}
