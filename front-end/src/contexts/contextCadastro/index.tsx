import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface iContextProps {
  children: React.ReactNode;
}

export interface iCadastroData {
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

interface iCadastroContext {
  showSenha: boolean;
  toggleShowSenha: (e: React.MouseEvent) => void;
}

export const CadastroContext = createContext({} as iCadastroContext);

export const CadastroProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const [showSenha, setShowSenha] = useState(false);

  const toggleShowSenha = (e: React.MouseEvent): void => {
    e.preventDefault();
    showSenha === true ? setShowSenha(false) : setShowSenha(true);
  };

  return (
    <CadastroContext.Provider
      value={{
        showSenha,
        toggleShowSenha,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};
