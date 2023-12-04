import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error";
import About from "../component/Page/About";
import Course from "../component/Page/Course";
import Home from "../component/Page/Home";
import Login from "../component/Page/Login";
import Register from "../component/Page/Register";
import Root from "../component/Root";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
