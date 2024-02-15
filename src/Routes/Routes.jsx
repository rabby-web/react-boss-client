import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Secret from "../Page/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import AddItems from "../Page/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "addItems",
        element: <AddItems></AddItems>,
      },

      // admin only routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
