import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Pages/CadastroPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
    </Routes>
  );
};
