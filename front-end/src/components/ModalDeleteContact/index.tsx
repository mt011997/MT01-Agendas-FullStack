import { useContext } from "react";
import { ModalDeleteContactsContext } from "../../contexts/contextModalDeleteContacts";
import { ContainerModal, HeaderModal, ModalSection } from "../ModalCreateContacts/styled";
import { DivButton } from "./styled";

export const ModalDeleteContacts = () => {
  const { fecharModalDelete, deletarContact } =
    useContext(ModalDeleteContactsContext);
  const { fullNameContact } = useContext(ModalDeleteContactsContext);

  return (
    <ModalSection>
      <ContainerModal>
        <HeaderModal>
          <span>Deletar Contato</span>
          <button onClick={fecharModalDelete}>X</button>
        </HeaderModal>
        <DivButton>
          <h2>Deseja deletar o Contato: {fullNameContact} ?</h2>
          <button type="button" onClick={deletarContact}>
            Excluir
          </button>
        </DivButton>
      </ContainerModal>
    </ModalSection>
  );
};