import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginContext } from "../contextLogin";
import { iContextProps } from "../contextSignUp";

export interface iEditModal{
    full_name?: string;
    email?: string;
    password?: string;
    phone?: string;
}

interface iEditModalContext {
    editClient: (data: iEditModal) => Promise<void>;
}

export const EditModalContext = createContext({} as iEditModalContext);

export const ModalProvider = ({ children }: iContextProps) => {
  const { setLoading } = useContext(LoginContext);

  const editClient = async (data: iEditModal) => {
    const token = localStorage.getItem("@Set:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .patch("/clients/update", data)
      .then((res) => {
        toast.success("Atualizado com sucesso!", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Algo deu errado!", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <EditModalContext.Provider value={{ editClient }}>
      {children}
    </EditModalContext.Provider>
  );
};