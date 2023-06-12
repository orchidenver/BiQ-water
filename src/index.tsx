import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AppProvider } from "./context/context";
import MainPage from "./pages/MainPage";
import Shop from "./pages/Shop";
import Page404 from "./pages/Page404";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Policy from "./pages/Policy";
import Cookies from "./pages/Cookies";
import CookiesModal from "./components/CookiesModal";
import MobileOnly from "./pages/MobileOnly";
import { useCookies } from "react-cookie";
import useMediaQuery from "./helpers";

import "./fonts/nexa-heavy.ttf";

function Layout() {
  const [cookies] = useCookies(["cookieConsent"]);
  const matches = useMediaQuery("(max-width: 428px)");
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      {!cookies.cookieConsent && <CookiesModal />}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "cookies",
        element: <Cookies />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
