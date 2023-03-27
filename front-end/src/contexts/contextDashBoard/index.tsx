import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iContextProps } from "../contextSignUp";
import { iContact, LoginContext } from "../contextLogin";

interface iDashBoardContext {
  logout: () => void;
  fecharModal: () => void;
  modal: boolean;
  abrirModal: () => void;
  searchContact: (findContact: string) => void;
  findContacts: iContact[] | []
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: string;
  setFindContacts: React.Dispatch<React.SetStateAction<iContact[] | []>>
}

export const DashBoardContext = createContext({} as iDashBoardContext);

export const DashBoardProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const { setClient, contacts } = useContext(LoginContext);
  
  const [findContacts, setFindContacts] = useState<iContact[] | []>([])
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("")

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

  const searchContact = (findContact: string) => {
    setSearch(findContact)
    const filter = contacts.filter((contact) => {
      const s = search.toLowerCase().trim()
      const contactName = contact.full_name.toLowerCase();
      const contactEmail = contact.email.toLowerCase();
      return contactName.includes(s) || contactEmail.includes(s);
    })

    setFindContacts(filter)
  }

  return (
    <DashBoardContext.Provider value={{ logout, fecharModal, modal, abrirModal, searchContact, findContacts, setSearch, search, setFindContacts }}>
      {children}
    </DashBoardContext.Provider>
  );
};
