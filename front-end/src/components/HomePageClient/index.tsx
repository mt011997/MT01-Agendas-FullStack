import { useContext } from "react"
import { LoginContext } from "../../contexts/contextLogin"
import { EditModalContext } from "../../contexts/contextModalEditClient"
import { Container } from "./styled"

export const HomePageClient = () =>{
    const { client } = useContext(LoginContext)
    const { abrirModalEdit } = useContext(EditModalContext)
    return(
        <Container>
            <h2>Usuário: {client?.full_name}</h2>
            <span>Email: {client?.email}</span>
            <span>Telefone: {client?.phone}</span>
            <button onClick={abrirModalEdit}>Editar Dados</button>
        </Container>
        
    )
}