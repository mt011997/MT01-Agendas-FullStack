import { Route, Routes } from "react-router-dom";
import { SignUp } from "../Pages/SignUpPage";
import { DashBoard } from "../Pages/DashBoard";
import { Login } from "../Pages/LoginPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/homepage" element={<DashBoard />} />
    </Routes>
  );
};
