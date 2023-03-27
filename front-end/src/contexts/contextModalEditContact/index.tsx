import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { DashBoardContext } from "../contextDashBoard";
import { LoginContext } from "../contextLogin";
import { iContextProps } from "../contextSignUp";

export interface iEditModalContact {
  full_name?: string;
  email?: string;
  phone?: string;
}

interface iEditModalContactContext {
  editContact: (data: iEditModalContact) => Promise<void>;
  modalEditContact: boolean,
  abrirModalEditContact:(id: string) => void,
  fecharModalEditContact:() => void,
}

export const EditModalContactContext = createContext({} as iEditModalContactContext);

export const EditContactModalProvider = ({ children }: iContextProps) => {
  const { setLoading, contacts } = useContext(LoginContext);
  const { setSearch, setFindContacts } = useContext(DashBoardContext)
  const [modalEditContact, setModalEditContact] = useState(false);
  const [contactId, setContactId] = useState("")

  const abrirModalEditContact = (id: string) => {
    setContactId(id)
    setModalEditContact(true);
  };

  const fecharModalEditContact = () => {
    setModalEditContact(false);
  };
  
  const editContact = async (data: iEditModalContact) => {
    const newContact = contacts.find((contact) => { return contact.id == contactId})

    if (data.email == "") {
      data.email = newContact?.email;
    }
    if (data.full_name == "") {
      data.full_name = newContact?.full_name;
    }
    if (data.phone == "") {
      data.phone = newContact?.phone;
    }

    const token = localStorage.getItem("@Set:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api
      .patch(`/contacts/${contactId}`, data)
      .then((res) => {
        setSearch("")
        setFindContacts([])
        setModalEditContact(false)
        toast.success("Contato atualizado com sucesso!", {
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
    <EditModalContactContext.Provider value={{ editContact, abrirModalEditContact, fecharModalEditContact, modalEditContact }}>
      {children}
    </EditModalContactContext.Provider>
  );
};
