import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { EditModalContactContext, iEditModalContact } from "../../contexts/contextModalEditContact";
import { editContactSchema } from "../../schemas";
import { ContainerModal, FormModal, HeaderModal, ModalSection } from "./styled";

export const ModalEditContact = () => {
    const { fecharModalEditContact, editContact} = useContext(EditModalContactContext)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<iEditModalContact>({
      resolver: yupResolver(editContactSchema),
    });
    return (
        <ModalSection>
          <ContainerModal>
            <HeaderModal>
              <span>Editar Dados</span>
              <button onClick={fecharModalEditContact}>X</button>
            </HeaderModal>
            <FormModal onSubmit={handleSubmit(editContact)}>

              <label htmlFor="full_name">Nome Completo</label>
              <input type="text" placeholder="Nome Completo" {...register("full_name")} />
              <span>{errors.full_name?.message}</span>

              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Email" {...register("email")} />
              <span>{errors.email?.message}</span>

              <label htmlFor="phone">Telefone</label>
              <input type="text" placeholder="Telefone Ex.: 11 999999999" {...register("phone")} />
              <span>{errors.phone?.message}</span>
              
              <button type="submit">Atualizar</button>
            </FormModal>
          </ContainerModal>
        </ModalSection>
    );
  };