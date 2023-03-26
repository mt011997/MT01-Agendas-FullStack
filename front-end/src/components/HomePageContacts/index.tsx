import { useContext } from "react";
import { LoginContext } from "../../contexts/contextLogin";
import { ModalDeleteContactsContext } from "../../contexts/contextModalDeleteContacts";
import { EditModalContactContext } from "../../contexts/contextModalEditContact";
import { LiContact, UlContact } from "./styled";

export const HomePageContacts = () => {
  const { contacts } = useContext(LoginContext);
  const { abrirModalDelete } = useContext(ModalDeleteContactsContext);
  const { abrirModalEditContact } = useContext(EditModalContactContext)

  return (
    <UlContact>
      {contacts.length === 0 ? (
        <h3>Você não possui nenhum contato no momento! Adicione no botão de <b>+</b> acima! </h3>
      ) : (
        contacts.map((contact) => {
          return (
            <LiContact
              key={contact.id}
            >
              <h2>Contato: {contact.full_name}</h2>
              <span>Email: {contact.email}</span>
              <span>Telefone: {contact.phone}</span>
                <button onClick={() => abrirModalEditContact(contact.id)}>
                  Atualizar
                </button>
                <button onClick={() => abrirModalDelete(contact.full_name, contact.id)}>
                  Deletar
                </button>
            </LiContact>
          );
        })
      )}
    </UlContact>
  );
};