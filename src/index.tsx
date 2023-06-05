import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { CartProvider } from "./context/cartContext";
import MainPage from "./pages/MainPage";
import Shop from "./pages/Shop";
import Page404 from "./pages/Page404";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Policy from "./pages/Policy";
import Cookies from "./pages/Cookies";

import "./fonts/nexa-heavy.ttf";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <RouterProvider router={router} />
    {/* </CartProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
