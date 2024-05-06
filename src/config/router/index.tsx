import { Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import Login from "../../pages/login";

export const RoutesConfig = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </>
);
