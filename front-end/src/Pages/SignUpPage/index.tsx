import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AnimatedEntranceTop } from "../../components/AnimatedTransitions.tsx";
import { FormSignUp } from "../../components/FormSignUp";
import { Load } from "../../components/LoadingScreen";
import { LoginContext } from "../../contexts/contextLogin";

export const SignUp = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return (
    <div>
      {!client ? 
      <AnimatedEntranceTop>
        <FormSignUp /> 
      </AnimatedEntranceTop>
      : 
      <Navigate to="/homepage" replace />}
    </div>
  );
};
