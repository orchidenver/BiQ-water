import * as React from "react";
import "./Button.css";

interface ButtonInterface {
  children: string;
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
    <button
      className={`button ${component ? "button-banner" : null}`}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
}
