import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

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
  onSubmit: (data: iCadastroData) => Promise<void>;
}

export const CadastroContext = createContext({} as iCadastroContext);

export const CadastroProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const [showSenha, setShowSenha] = useState(false);

  const toggleShowSenha = (e: React.MouseEvent): void => {
    e.preventDefault();
    showSenha === true ? setShowSenha(false) : setShowSenha(true);
  };

  const onSubmit = async (data: iCadastroData) => {
    console.log(data);
    await api
      .post("/clients", data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  };

  return (
    <CadastroContext.Provider
      value={{
        showSenha,
        toggleShowSenha,
        onSubmit,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};
