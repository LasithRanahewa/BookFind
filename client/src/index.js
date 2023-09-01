import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import BooksPage from "./pages/BooksPage";
import VendorsPage from "./pages/VendorsPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

import AdminDash from "./pages/Admin/AdminDash";
import VendorDash from "./pages/Vendor/VendorDash";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "books",
    element: <BooksPage />,
  },
  {
    path: "vendors",
    element: <VendorsPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "sign-in",
    element: <SignInPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
  {
    path: "admin-dashboard",
    element: <AdminDash />,
  },
  {
    path: "vendor-dashboard",
    element: <VendorDash />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
