import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

export const SignUpProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const [showSenha, setShowSenha] = useState(false);

  const toggleShowSenha = (e: React.MouseEvent): void => {
    e.preventDefault();
    showSenha === true ? setShowSenha(false) : setShowSenha(true);
  };

  const onSubmit = async (data: iCadastroData) => {
    await api
      .post("/clients", data)
      .then(() => {
        toast.success('Cadastro realizado com sucesso!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        navigate("/");
      })
      .catch((err) => {
        toast.error("Telefone ou email já existentes" , {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
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
