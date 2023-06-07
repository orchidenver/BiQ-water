import { useAppContext } from "../context/context";
import "./Page404.css";

export default function Page404() {
  const { lang } = useAppContext();
  return (
    <section className="not-found">
      <p className="not-found-head">404</p>
      <p className="not-found-desc">
        {lang === "ENG" ? "Not Found" : "Nie znaleziono"}
      </p>
      <p className="not-found-text">
        {lang === "ENG" ? "This page doesn’t exist" : "Ta strona nie istnieje"}
      </p>
    </section>
  );
}
