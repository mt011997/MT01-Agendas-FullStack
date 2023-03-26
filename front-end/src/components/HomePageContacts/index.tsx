import { useContext } from "react";
import { LoginContext } from "../../contexts/contextLogin";
// import { ModalDeleteContext } from "../../contexts/contextModalDelete";
import { LiTech, UlTech } from "./styled";

export const HomePageContacts = () => {
  const { contacts } = useContext(LoginContext);
//   const { abrirModalDelete } = useContext(ModalDeleteContext);

  return (
    <UlTech>
      {contacts.length === 0 ? (
        <h2>Você não possui nenhum contato no momento! Adicione no botão acima! </h2>
      ) : (
        contacts.map((contact) => {
          return (
            <LiTech
              key={contact.id}
            //   onClick={() => abrirModalDelete(tec.title, tec.id)}
            >
              <h2>Contato: {contact.full_name}</h2>
              <span>Email: {contact.email}</span>
              <span>Telefone: {contact.phone}</span>
                <button>
                  Atualizar
                </button>
                <button>
                  Deletar
                </button>
            </LiTech>
          );
        })
      )}
    </UlTech>
  );
};