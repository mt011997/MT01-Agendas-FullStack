import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AnimatedEntranceLeft } from "../../components/AnimatedTransitions.tsx";
import { FormLogin } from "../../components/FormLogin";
import { Load } from "../../components/LoadingScreen";
import { LoginContext } from "../../contexts/contextLogin";

export const Login = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return (
    <div>{!client ? 
      <AnimatedEntranceLeft>
        <FormLogin /> 
      </AnimatedEntranceLeft>
    : 
    <Navigate to="/homepage" replace />}</div>
  );
};
