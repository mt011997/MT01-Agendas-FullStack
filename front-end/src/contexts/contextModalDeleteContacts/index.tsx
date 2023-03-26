import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginContext } from "../contextLogin";
import { iContextProps } from "../contextSignUp";

interface iModalDeleteContext {
  abrirModalDelete: (nameContact: string, idCont: string) => void;
  fecharModalDelete: () => void;
  modalDelete: boolean;
  fullNameContact: string;
  deletarContact: () => Promise<void>;
}

interface iModalDeleteResponse {
  status: string;
  message: string;
}

export const ModalDeleteContactsContext = createContext({} as iModalDeleteContext);

export const ModalDeleteContactsProvider = ({ children }: iContextProps) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [fullNameContact, setfullNameContact] = useState("");
  const [idContact, setIdContact] = useState("");
  const { setLoading } = useContext(LoginContext);

  const abrirModalDelete = (nameContact: string, idCont: string) => {
    setModalDelete(true);
    setfullNameContact(nameContact);
    setIdContact(idCont);
  };

  const fecharModalDelete = () => {
    setModalDelete(false);
  };

  const deletarContact = async () => {
    await api
      .delete<iModalDeleteResponse>(`/contacts/${idContact}`)
      .then(() => {
        toast.success(`Tecnologia ${fullNameContact} deletado com sucesso!`, {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalDelete(false);
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
    <ModalDeleteContactsContext.Provider
      value={{
        abrirModalDelete,
        fecharModalDelete,
        modalDelete,
        fullNameContact,
        deletarContact,
      }}
    >
      {children}
    </ModalDeleteContactsContext.Provider>
  );
};