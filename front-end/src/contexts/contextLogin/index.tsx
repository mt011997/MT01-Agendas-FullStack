import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iContextProps } from "../contextSignUp";

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

export interface iContact {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  created_at: Date;
  clientId: string;
}

interface iLoginContext {
  onSubmit: (data: iLoginData) => Promise<void>;
  client: iClient | null;
  loading: boolean;
  setClient: React.Dispatch<React.SetStateAction<iClient | null>>;
  setContacts: React.Dispatch<React.SetStateAction<iContact[]>>;
  setLoading: (data: boolean) => void;
  contacts: iContact[]
}

export const LoginContext = createContext({} as iLoginContext);

export const LoginProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate();
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<iContact[]>([])

  useEffect(() => {
    async function loadClient() {
      const token = localStorage.getItem("@Set:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const data = await api.get("/clients/list");
          setClient(data.data);
          setContacts(data.data.contacts)
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
        console.log(res.data)
        toast.success('Login realizado com sucesso!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        navigate("/homepage", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha inválido" , {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };

  return (
    <LoginContext.Provider
      value={{
        onSubmit,
        client,
        loading,
        setClient,
        contacts,
        setContacts,
        setLoading
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
