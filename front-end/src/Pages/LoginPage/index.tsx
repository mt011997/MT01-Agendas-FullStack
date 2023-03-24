import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { Load } from "../../components/LoadingScreen";
import { LoginContext } from "../../contexts/contextLogin";

export const Login = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return (
    <div>{!client ? <FormLogin /> : <Navigate to="/homepage" replace />}</div>
  );
};
