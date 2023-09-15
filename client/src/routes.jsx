import { Navigate, useRoutes } from "react-router-dom";
// import ProtectedRoutes from "./ProtectedRoutes";

import Home from "./pages/bookfind/Home";
import Books from "./pages/bookfind/Books";
import Bookstores from "./pages/bookfind/Bookstores";
import Vendors from "./pages/bookfind/Vendors";

import About from "./pages/bookfind/About";
import Login from "./pages/bookfind/Login";
import Signup from "./pages/bookfind/Signup";
import Profile from "./pages/bookfind/UserProfile";

import AvailableBookstores from "./pages/bookfind/AvailableBookstores";
import VendorPage from "./pages/bookfind/VendorPage";
import BookPage from "./pages/bookfind/BookPage";
import FeaturedBook from "./pages/bookfind/FeaturedBook";

import Page404 from "./pages/Page404";

import VendorDashboard from "./pages/vendor/VendorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import AuthorPage from "./pages/bookfind/AuthorPage";
import Authors from "./pages/bookfind/Authors";


import VendorSignUp from "./pages/vendor/VendorSignUp";
import VendorLogIn from "./pages/vendor/VendorLogIn";
import axios from "axios";

function Router() {
  const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080/api",
  });

  const routes = useRoutes([
    {
      path: "/",
      element: <Home instance={instance} />,
    },
    {
      path: "/books",
      element: <Books instance={instance} />,
    },
    // {
    //   path: "/bookstores",
    //   element: <Bookstores instance={instance} />,
    // },
    {
      path: "/vendors",
      element: <Vendors instance={instance} />,
    },
    {
      path: "/about",
      element: <About instance={instance} />,
    },
    {
      path: "/login",
      element: <Login instance={instance} />,
    },
    {
      path: "/register",
      element: <Signup instance={instance} />,
    },
    {
      path: "/profile",
      // element: <ProtectedRoute><Profile instance={instance} /></ProtectedRoute>
      element: <Profile instance={instance} />,
    },
    
    {
      path: "/vendor-dashboard",
      element: <VendorDashboard instance={instance} />,
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard instance={instance} />,
    },

    {
      path: "/availablebookstores",
      element: <AvailableBookstores instance={instance} />,
    },
    {
      path: "/bookstore",
      element: <VendorPage instance={instance} />,
    },
    {
      path: "/book",
      element: <BookPage instance={instance} />,
    },
    {
      path: "/vendor-signup",
      element: <VendorSignUp instance={instance} />,
    },
    {
      path: "/vendor-login",
      element: <VendorLogIn instance={instance} />,
    },
    {
      path: "/featuredbook",
      element: <FeaturedBook instance={instance} />,
    },
    {
      path: "/authors",
      element: <Authors instance={instance} />,
    },
    {
      path: "/author",
      element: <AuthorPage instance={instance} />,
    },

  

    // 404
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return routes;
}

export default Router;
