import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iContextProps } from "../contextCadastro";

export interface iLoginData {
  email: string;
  password: string;
}

export interface iClient {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  created_at: Date;
  contacts: [];
}

interface iLoginContext {
  onSubmit: (data: iLoginData) => Promise<void>;
  client: iClient | null;
  loading: boolean;
}

export const LoginContext = createContext({} as iLoginContext);

export const LoginProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClient() {
      const token = localStorage.getItem("@Set:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const data = await api.get("/clients/list");
          setClient(data.data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadClient();
  }, [loading]);

  const onSubmit = async (data: iLoginData) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@Set:token", res.data.token);
        localStorage.setItem("@Set:User_id", res.data.clientId);
        api.defaults.headers.authorization = `Bearer ${res.data.token}`;
        setClient(res.data);
        navigate("/homepage", { replace: true });
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  };

  return (
    <LoginContext.Provider
      value={{
        onSubmit,
        client,
        loading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
