import { Route, Routes } from "react-router-dom";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Cadastro />} />
      <Route path="/home" element={<DashBoard />} />
    </Routes>
  );
};
