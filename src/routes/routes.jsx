import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ProfileLayout from "../layout/ProfileLayout";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import Repositories from "../pages/repo/Repositories";
import UpdateProfile from "../pages/profile/update/UpdateProfile";
import Ranks from "../pages/ranks/Ranks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <Ranks />,
      },
      {
        path: "ranks",
        element: <Ranks />,
      },
      {
        path: "liked-profile",
        element: <Ranks />,
      },
      {
        path: "update-profile/:usernames",
        exact: true,
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/profile",
    exact: true,
    element: <ProfileLayout />,
    children: [
      {
        path: ":usernames",
        exact: true,
        element: <Profile />,
      },
      {
        path: ":usernames/repos",
        exact: true,
        element: <Repositories />,
      },

      {
        path: ":usernames/followers",
        exact: true,
        element: "Coming Soon",
      },
      {
        path: ":usernames/following",
        exact: true,
        element: "Coming Soon",
      },
      {
        path: ":usernames/starred",
        exact: true,
        element: "Coming Soon",
      },
    ],
  },
]);
