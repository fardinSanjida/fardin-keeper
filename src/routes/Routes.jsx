import { createBrowserRouter } from "react-router";
import Homepage from '../pages/homepages/Homepage';
import Friends from '../pages/friends/Friends';
import Timeline from '../pages/timeline/Timeline';
import Stats from '../pages/stats/Stats';
import MainLayout from '../layout/MainLayout';
import Error from '../pages/error/Error';
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage/>, 
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch('/friendsData.json').then(res => res.json())
      }

    ],
    errorElement:<Error/>         
  },
]);