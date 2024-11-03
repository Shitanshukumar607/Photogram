import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Post from "./pages/Post";
import Myphotos from "./pages/Myphotos";
import ProtectedRoutes from "./components/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      { path: "/", element: <Home />, errorElement: <Error /> },
      { path: "/profile", element: <Profile />, errorElement: <Error /> },
      { path: "/post", element: <Post />, errorElement: <Error /> },
      { path: "/myphotos", element: <Myphotos />, errorElement: <Error /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
