import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginContext } from "../contextLogin";
import { iContextProps } from "../contextSignUp";

export interface iCreateContact{
  full_name: string;
  email: string;
  phone: string;
}

export interface iModalCreateContext {
    abrirModalCreate: () => void;
    fecharModalCreate: () => void;
    modalCreateContacts: boolean
    createContact: (data: iCreateContact) => Promise<void>;
}

export const ModalCreateContext = createContext({} as iModalCreateContext);

export const ModalCreateContactsProvider = ({ children }: iContextProps) => {
  const { setLoading, setContacts, contacts } = useContext(LoginContext)
  const [modalCreateContacts, setModalCreateContacts] = useState(false)


  const createContact = async (data: iCreateContact) => {
    const token = localStorage.getItem("@Set:token");
    const userId = localStorage.getItem("@Set:User_id")
    const newData = {...data, clientId: userId}
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .post("/contacts", newData)
      .then((res) => {
        toast.success("Contato criado com sucesso!", {
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

  const abrirModalCreate = () => {
    setModalCreateContacts(true);
  };

  const fecharModalCreate = () => {
    setModalCreateContacts(false);
  };

  return (
    <ModalCreateContext.Provider value={{ createContact ,abrirModalCreate, fecharModalCreate, modalCreateContacts }}>
      {children}
    </ModalCreateContext.Provider>
  );
};
