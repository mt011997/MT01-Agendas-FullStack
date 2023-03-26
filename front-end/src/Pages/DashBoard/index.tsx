import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AnimatedEntranceLeft, AnimatedEntranceRight } from "../../components/AnimatedTransitions.tsx";
import { HomePageClient } from "../../components/HomePageClient";
import { HomePageContacts } from "../../components/HomePageContacts";
import { HomePageContactsHeader } from "../../components/HomePageContactsHeader";
import { HomePageHeader } from "../../components/HomePageHeader";
import { Load } from "../../components/LoadingScreen";
import { ModalCreateContacts } from "../../components/ModalCreateContacts";
import { ModalDeleteContacts } from "../../components/ModalDeleteContact";
import { ModalEditClient } from "../../components/ModalEditClient";
import { ModalEditContact } from "../../components/ModalEditContact";
import { LoginContext } from "../../contexts/contextLogin";
import { ModalCreateContext } from "../../contexts/contextModalCreateContacts";
import { ModalDeleteContactsContext } from "../../contexts/contextModalDeleteContacts";
import { EditModalContext } from "../../contexts/contextModalEditClient";
import { EditModalContactContext } from "../../contexts/contextModalEditContact";
import { ContainerPage } from "./styled";

export const DashBoard = () => {
  const { client, loading } = useContext(LoginContext);
  const { modalCreateContacts } = useContext(ModalCreateContext)
  const { modalEditClient } = useContext(EditModalContext)
  const { modalDelete } = useContext(ModalDeleteContactsContext)
  const { modalEditContact } = useContext(EditModalContactContext)

  if (loading) {
    return <Load />;
  }

  return <div>{client ? 
  <ContainerPage>
    <AnimatedEntranceRight>
      <HomePageHeader /> 
      <HomePageClient/>
      <HomePageContactsHeader/>
    </AnimatedEntranceRight>
    {
      modalEditClient?
      <ModalEditClient/>
      :
      <></>
    }
    <AnimatedEntranceLeft>
      <HomePageContacts/>
    </AnimatedEntranceLeft>
    {
      modalCreateContacts?
      <ModalCreateContacts/>
      :
      <></>
    }
    {
      modalEditContact?
      <ModalEditContact/>
      :
      <></>
    }
    { 
      modalDelete?
      <ModalDeleteContacts/>
      :
      <></>
    }
  </ContainerPage>
  : 
  <Navigate to="/" replace />}</div>;
};
