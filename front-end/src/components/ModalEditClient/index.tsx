import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { DashBoardContext } from "../../contexts/contextDashBoard";
import { EditModalContext, iEditModal } from "../../contexts/contextModalEditClient";
import { CadastroContext } from "../../contexts/contextSignUp";
import { editClientSchema } from "../../schemas";
import { ContainerModal, FormModal, HeaderModal, ModalSection } from "./styled";

export const ModalEditClient = () => {
    const { modal, fecharModal } = useContext(DashBoardContext);
    const { showSenha, toggleShowSenha } = useContext(CadastroContext)
    const { editClient } = useContext(EditModalContext)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<iEditModal>({
      resolver: yupResolver(editClientSchema),
    });
    return (
      <ModalSection modal={modal}>
        <ContainerModal>
          <HeaderModal>
            <span>Editar Dados</span>
            <button onClick={fecharModal}>X</button>
          </HeaderModal>
          <FormModal onSubmit={handleSubmit(editClient)}>

            <label htmlFor="full_name">Nome Completo</label>
            <input type="text" placeholder="Nome Completo" {...register("full_name")} />
            <span>{errors.full_name?.message}</span>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            <span>{errors.email?.message}</span>

            <label htmlFor="password">Senha</label>
            <div className="Password">
              <input
                type={showSenha ? "text" : "password"}
                placeholder="Senha"
                {...register("password")}
              />
              <button type="button" onClick={(e) => toggleShowSenha(e)}>
                {showSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            <label htmlFor="phone">Telefone</label>
            <input type="text" placeholder="Telefone" {...register("phone")} />
            <span>{errors.phone?.message}</span>
            
            <button type="submit">Atualizar</button>
          </FormModal>
        </ContainerModal>
      </ModalSection>
    );
  };