import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
