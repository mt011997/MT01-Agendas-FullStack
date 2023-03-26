import { useContext } from "react";
import { ModalCreateContext } from "../../contexts/contextModalCreateContacts";
import { Container } from "./styled";

export const HomePageContactsHeader = () => {
  const { abrirModalCreate } = useContext(ModalCreateContext);

  return (
    <Container>
      <h2>Contatos:</h2>
      <button onClick={abrirModalCreate}>+</button>
    </Container>
  );
};