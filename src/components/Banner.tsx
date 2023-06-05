import * as React from "react";
import Button from "./Button";
import ImgComponent from "./ImgComponent";
import "./Banner.css";
import bg from "../assets/bg-main.jpg";

export default function Banner() {
  return (
    <aside className="banner">
      <ImgComponent link={bg} altText="banner" banner={true} />
      <Button width="35vw" height={50} component="banner">
        Buy now
      </Button>
    </aside>
  );
}
