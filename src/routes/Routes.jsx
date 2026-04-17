import { createBrowserRouter } from "react-router";
import Homepage from '../pages/homepages/Homepage';
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
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friends/:id",
        element: <FriendDetails />,
      }

    ],
    errorElement:<Error/>         
  },
]);
