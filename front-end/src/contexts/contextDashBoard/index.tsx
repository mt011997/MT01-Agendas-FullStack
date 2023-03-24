import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { iContextProps } from "../contextCadastro";
import { LoginContext } from "../contextLogin";

interface iDashBoardContext {
  logout: () => void;
}
export const DashBoardContext = createContext({} as iDashBoardContext);

export const DashBoardProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const { setClient } = useContext(LoginContext);

  const logout = () => {
    localStorage.clear();
    setClient(null);
    navigate("/");
  };

  return (
    <DashBoardContext.Provider value={{ logout }}>
      {children}
    </DashBoardContext.Provider>
  );
};
