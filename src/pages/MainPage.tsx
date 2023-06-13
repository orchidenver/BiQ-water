import * as React from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Button from "../components/Button";
import TextBlock from "../components/TextBlock";
import ImgComponent from "../components/ImgComponent";
import Composition from "../components/Composition";
import { useAppContext } from "../context/context";
import "./MainPage.css";
import productImg from "../assets/product-example.jpg";
import productImg2 from "../assets/product-example-2.jpg";
import logo from "../assets/logo.jpg";
import promo from "../assets/promo.jpg";

export default function MainPage() {
  const { lang } = useAppContext();

  return (
    <>
      <Banner />
      <div className="moto">
        <h1
          style={{
            width: lang === "ENG" ? 195 : 290,
          }}
        >
          {lang === "ENG" ? "BE QUALITY WATER" : "BĄDŹ JAKOŚCIOWĄ WODĄ"}
        </h1>
      </div>
      <ImgComponent link={promo} altText="promo" banner={false} />
      <Divider />
      <TextBlock
        header={
          lang === "ENG" ? "Distilled from nature" : "Destylowana z natury"
        }
        element="DIV"
      >
        {
          <>
            <p className="list-block-paragraph">
              {lang === "ENG"
                ? "Humanity is rethinking the way we live. In a complex age, we strive for pure simplicity in our mental and physical health. This return to essentials applies to our planet, too. We can only improve our world by preserving the essential beauty that already exists in nature. Still water is essential because:"
                : "Ludzkość przemyślała sposób naszego życia. W czasach pełnych złożoności, dążymy do czystej prostoty dla naszego zdrowia mentalnego i fizycznego. Ten powrót do podstaw odnosi się także do naszej planety. Możemy poprawić nasz świat tylko poprzez zachowanie esencjonalnego piękna, które już istnieje w naturze."}
            </p>
            <ul>
              <li>
                {lang === "ENG"
                  ? "Quality of drinking water affects all parts of human existence."
                  : "Jakość wody pitnej wpływa na wszystkie aspekty istnienia człowieka."}
              </li>
              <li>
                {lang === "ENG"
                  ? "Still water is balanced correctly for natural being."
                  : "Woda niegazowana jest odpowiednio zrównoważona dla naturalnego bytu."}
              </li>
              <li>
                {lang === "ENG"
                  ? "Still water is enriched with the purity of deep sources."
                  : "Woda niegazowana jest wzbogacona czystością głębokich źródeł."}
              </li>
            </ul>
            <p className="list-block-paragraph">
              {lang === "ENG"
                ? "Get closer to your original natural state with still water bottled straight from the source."
                : "Zbliż się do swojego pierwotnego stanu naturalnego dzięki wodzie niegazowanej butelkowanej prosto z źródła."}
            </p>
          </>
        }
      </TextBlock>
      <Divider />
      <TextBlock
        header={
          lang === "ENG" ? "All in one bottle" : "Wszystko w jednej butelce"
        }
      >
        {lang === "ENG"
          ? "One bottle. Nothing but still water inside. And when you know the source, you taste the purity even more. From the very beginning, we use only specially-selected sources of pure water. Then with science, we recreate water cycle as it occurs all over our earth. Throughout the entire process — producing glass bottles, designing distribution lines, even crafting packaging — we ensure the highest quality, bringing purity from nature right to you."
          : "Jedna butelka. W środku tylko woda niegazowana. A kiedy znasz jej źródło, smak czystości staje się jeszcze bardziej wyraźny. Już od samego początku korzystamy tylko z specjalnie wybranych źródeł czystej wody. Następnie, przy użyciu nauki, odtwarzamy cykl wody, tak jak zachodzi to na całej naszej planecie. Przez cały proces - produkcję szklanych butelek, projektowanie linii dystrybucji, nawet tworzenie opakowań - zapewniamy najwyższą jakość, przynosząc czystość prosto z natury do Ciebie."}
      </TextBlock>
      <ImgComponent link={productImg} altText="water" banner={false} />
      <TextBlock
        header={lang === "ENG" ? "Glass container" : "Szklany pojemnik"}
      >
        {lang === "ENG"
          ? "The glass bottle is environmentally friendly and preserves the temperature and natural taste of the water inside. The shape of the bottle is inspired by a moment of purity: when you see your own refection on the water's rippled surface."
          : "Szklana butelka jest przyjazna dla środowiska i zachowuje temperaturę oraz naturalny smak wody wewnątrz. Kształt butelki został zainspirowany momentem czystości: gdy widzisz swoje odbicie na zmarszczonym powierzchni wody."}
      </TextBlock>
      <Divider />
      <TextBlock
        header={lang === "ENG" ? "Stone bottle cap" : "Zrównoważone detale"}
      >
        {lang === "ENG"
          ? "The stone bottle cap ensures sustainable use, evokes a sense of harmony, and gives the feeling of being alone in the middle of nature — totally balanced, just still water and you."
          : "Korek z kamienia zapewnia zrównoważone użytkowanie, wywołuje poczucie harmonii i daje uczucie samotności pośrodku natury - całkowicie zbalansowanej, tylko ty i woda."}
      </TextBlock>
      <Divider />
      <TextBlock
        header={lang === "ENG" ? "Sustainable details" : "Zrównoważone detale"}
      >
        {lang === "ENG"
          ? "When water, glass, and stone come together, we only need one additional detail: a tamper-evident sticker to ensure your water is untouched. The sticker on the bottle is made of tyvek paper, so the whole bottle is recyclable and environmentally friendly."
          : "Kiedy woda, szkło i kamień łączą się, potrzebujemy tylko jednego dodatkowego detalu: plomby gwarantującej, że Twoja woda jest nietknięta. Plomba na butelce wykonana jest z papieru tyvek, dzięki czemu cała butelka jest nadająca się do recyklingu i przyjazna dla środowiska."}
      </TextBlock>
      <ImgComponent link={productImg2} altText="water" banner={false} />
      <div className="product-section">
        <div className="product-info-block">
          <span
            className="product-info-item bold"
            style={{
              fontSize: lang === "ENG" ? 20 : 16,
            }}
          >
            {lang === "ENG" ? "Still water" : "Woda Bezgazowa"}
          </span>
          <span
            className="product-info-item gray"
            style={{
              fontSize: lang === "ENG" ? 20 : 16,
            }}
          >
            0.3/0.7/1L
          </span>
        </div>
        <Button
          height={50}
          fontSize={lang === "ENG" ? 20 : 16}
          width={lang === "ENG" ? "40vw" : "45vw"}
        >
          {lang === "ENG" ? "More info" : "Dodatkowo"}
        </Button>
      </div>
      <ImgComponent link={logo} altText="logo" banner={false} />
      <Composition />
    </>
  );
}
