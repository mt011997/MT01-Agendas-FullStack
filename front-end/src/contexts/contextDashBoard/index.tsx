import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iContextProps } from "../contextSignUp";
import { LoginContext } from "../contextLogin";

interface iDashBoardContext {
  logout: () => void;
  fecharModal: () => void;
  modal: boolean;
  abrirModal: () => void;
}

export const DashBoardContext = createContext({} as iDashBoardContext);

export const DashBoardProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const { setClient } = useContext(LoginContext);

  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  const logout = () => {
    localStorage.clear();
    setClient(null);
    navigate("/");
  };

  return (
    <DashBoardContext.Provider value={{ logout, fecharModal, modal, abrirModal }}>
      {children}
    </DashBoardContext.Provider>
  );
};
