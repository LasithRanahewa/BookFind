import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/bookfind/Home";
import Books from "./pages/bookfind/Books";
import Bookstores from "./pages/bookfind/Bookstores";
import About from "./pages/bookfind/About";
import Login from "./pages/bookfind/Login";
import Signup from "./pages/bookfind/Signup";
import Profile from "./pages/bookfind/UserProfile";

import AvailableBookstores from "./pages/bookfind/AvailableBookstores";
import VendorPage from "./pages/bookfind/VendorPage";
import BookPage from "./pages/bookfind/BookPage";

import Page404 from "./pages/Page404";

import VendorDashboard from "./pages/vendor/VendorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "/bookstores",
      element: <Bookstores />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/vendor-dashboard",
      element: <VendorDashboard />,
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />,
    },


    {
        path: "/availablebookstores",
        element: <AvailableBookstores />,
    },
    {
        path: "/bookstore",
        element: <VendorPage />,
    },
    {
        path: "/book",
        element: <BookPage />,
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
