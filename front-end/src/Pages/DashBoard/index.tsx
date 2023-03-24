import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { HomePageHeader } from "../../components/HomePageHeader";
import { Load } from "../../components/LoadingScreen";
import { LoginContext } from "../../contexts/contextLogin";

export const DashBoard = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return <div>{client ? <HomePageHeader /> : <Navigate to="/" replace />}</div>;
};
