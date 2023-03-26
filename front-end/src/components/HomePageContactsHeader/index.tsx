import { useContext } from "react";
import { DashBoardContext } from "../../contexts/contextDashBoard";
import { ModalCreateContext } from "../../contexts/contextModalCreateContacts";
import { Container, DivPesquisa } from "./styled";

export const HomePageContactsHeader = () => {
  const { abrirModalCreate } = useContext(ModalCreateContext);
  const {searchContact, search} = useContext(DashBoardContext)

  return (
    <>
      <DivPesquisa>
      <label>Procurar Contato:</label>
      <input
          value={search}
          onChange={(event) => searchContact(event.target.value)}
          type="text"
          placeholder="Digitar Pesquisa"
          required
          />
      </DivPesquisa>
      <Container>
        <h2>Seus contatos:</h2>
        <button onClick={abrirModalCreate}>+</button>
      </Container>
    </>

  );
};