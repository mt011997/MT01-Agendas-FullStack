import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { HomePageClient } from "../../components/HomePageClient";
import { HomePageContacts } from "../../components/HomePageContacts";
import { HomePageContactsHeader } from "../../components/HomePageContactsHeader";
import { HomePageHeader } from "../../components/HomePageHeader";
import { Load } from "../../components/LoadingScreen";
import { ModalCreateContacts } from "../../components/ModalCreateContacts";
import { ModalEditClient } from "../../components/ModalEditClient";
import { LoginContext } from "../../contexts/contextLogin";
import { ContainerPage } from "./styled";

export const DashBoard = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return <div>{client ? 
  <ContainerPage>
    <ModalEditClient/>
    <HomePageHeader /> 
    <HomePageClient/>
    <HomePageContactsHeader/>
    <HomePageContacts/>
    <ModalCreateContacts/>
  </ContainerPage>
  : 
  <Navigate to="/" replace />}</div>;
};
