import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
	{
		path: "/login",
    element: <Login />,
	},
	{
		path: "/dashboard",
    element: <Dashboard />,
	}
]);
