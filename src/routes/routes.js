import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const UNAUTHORIZED = [
  {
    slug: "/signup",
    component: Signup,
  },
  {
    slug: "/login",
    component: Login,
  },
];

export const AUTHORIZED = [
  {
    slug: "/",
    component: Home,
  },
];
