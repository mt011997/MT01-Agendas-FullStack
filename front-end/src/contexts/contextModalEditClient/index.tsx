import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginContext } from "../contextLogin";
import { iContextProps } from "../contextSignUp";

export interface iEditModal {
  full_name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

interface iEditModalContext {
  editClient: (data: iEditModal) => Promise<void>;
  modalEditClient: boolean,
  abrirModalEdit:() => void,
  fecharModalEdit:() => void,
}

export const EditModalContext = createContext({} as iEditModalContext);

export const ModalProvider = ({ children }: iContextProps) => {
  const { setLoading, client } = useContext(LoginContext);
  const [modalEditClient, setModalEditClient] = useState(false);

  const abrirModalEdit = () => {
    setModalEditClient(true);
  };

  const fecharModalEdit = () => {
    setModalEditClient(false);
  };

  const editClient = async (data: iEditModal) => {

    if (data.email == "") {
      data.email = client?.email;
    }
    if (data.full_name == "") {
      data.full_name = client?.full_name;
    }
    if (data.phone == "") {
      data.phone = client?.phone;
    }
    if (data.password == "") {
      data = {
        email: data?.email,
        full_name: data?.full_name,
        phone: data?.phone,
      };
    }
    const token = localStorage.getItem("@Set:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .patch("/clients/update", data)
      .then((res) => {
        setModalEditClient(false)
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
    <EditModalContext.Provider value={{ editClient, abrirModalEdit, fecharModalEdit, modalEditClient }}>
      {children}
    </EditModalContext.Provider>
  );
};
