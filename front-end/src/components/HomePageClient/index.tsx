import { useContext } from "react"
import { DashBoardContext } from "../../contexts/contextDashBoard"
import { LoginContext } from "../../contexts/contextLogin"
import { Container } from "./styled"

export const HomePageClient = () =>{
    const { client } = useContext(LoginContext)
    const { abrirModal } = useContext(DashBoardContext)
    return(
        <Container>
            <h2>Usuário: {client?.full_name}</h2>
            <span>Email: {client?.email}</span>
            <span>Telefone: {client?.phone}</span>
            <button onClick={abrirModal}>Editar Dados</button>
        </Container>
        
    )
}