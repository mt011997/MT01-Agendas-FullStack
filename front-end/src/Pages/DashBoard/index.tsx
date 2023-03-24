import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { HomePage } from "../../components/HomePage";
import { Load } from "../../components/LoadingScreen";
import { LoginContext } from "../../contexts/contextLogin";

export const DashBoard = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return <div>{client ? <HomePage /> : <Navigate to="/" replace />}</div>;
};
