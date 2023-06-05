import * as React from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Button from "../components/Button";
import Footer from "../components/Footer";
import TextBlock from "../components/TextBlock";
import ImgComponent from "../components/ImgComponent";
import Composition from "../components/Composition";
import "./MainPage.css";
import productImg from "../assets/product-example.jpg";
import productImg2 from "../assets/product-example-2.jpg";
import logo from "../assets/logo.jpg";
import promo from "../assets/promo.jpg";

export default function MainPage() {
  return (
    <>
      <Banner />
      <div className="moto">
        <h1>BE QUALITY WATER</h1>
      </div>
      <ImgComponent link={promo} altText="promo" banner={false} />
      <Divider />
      <TextBlock header="Still from nature yet packed">
        {
          <>
            <p className="list-block-paragraph">
              The world is re-evaluating the mindset of living, striving for
              purity in both mental and physical existence. The global aim of
              progress extends beyond the improvement of the universe, but to
              preserve it to return natural quality of life. Still, water is
              essential as:
            </p>
            <ul>
              <li>
                Quality of water influences all spheres of human existence
              </li>
              <li>Still water is balanced right for nature beings</li>
              <li>Still water is empowered with the purity of deep sources</li>
            </ul>
            <p className="list-block-paragraph">
              Get closer to your original natural state with still water bottled
              straight from the source.
            </p>
          </>
        }
      </TextBlock>
      <Divider />
      <TextBlock header="All in one bottle">
        One bottle that cares inside nothing but still water gives you a feeling
        of even more purity when you know the way it was created. From the very
        beginning, we use pure water from a natural source, selected from more
        than 50 places in Europe. And add only a slight human touch as we
        recreate the water cycle as it is in nature. Through our application,
        within glass production, even when designing distribution lines and
        crafting packaging we're taking care of life quality and making purity
        an essential global must have.
      </TextBlock>
      <ImgComponent link={productImg} altText="water" banner={false} />
      <TextBlock header="Glassy water surface">
        The glass bottle is environmentally friendly to use and preserves the
        temperature and natural taste of the liquid, depriving it of extraneous
        flavors. The shape of the bottle reflects the natural vibe of the moment
        of purity when you feel like yourself in the reflection of the water's
        surface.
      </TextBlock>
      <Divider />
      <TextBlock header="Stone bottle cap">
        The stone bottle cap ensures environmental friendliness of use, evokes a
        sense of harmony and gives you the same feeling of balance as a natural
        environment somewhere in the middle of nowhere — just still water and
        you.
      </TextBlock>
      <Divider />
      <TextBlock
        header="Sticker touch
to keep untouched"
      >
        When water, glass, and stone are together, we can only add one paper
        nuance to keep water untouched. The sticker on the bottle is made of
        tyvek paper, which is absolutely suitable for recycling and therefore
        environmentally friendly.
      </TextBlock>
      <ImgComponent link={productImg2} altText="water" banner={false} />
      <div className="product-section">
        <div className="product-info-block">
          <span className="product-info-item bold">Still water</span>
          <span className="product-info-item gray">0.3/0.7/1L</span>
        </div>
        <Button width="35vw" height={35}>
          Add to cart
        </Button>
      </div>
      <ImgComponent link={logo} altText="logo" banner={false} />
      <Composition />
    </>
  );
}
