import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { iCreateContact, ModalCreateContext } from "../../contexts/contextModalCreateContacts";
import { createContactSchema } from "../../schemas";
import { ContainerModal, FormModal, HeaderModal, ModalSection } from "./styled";

export const ModalCreateContacts = () => {
    const {modalCreateContacts, fecharModalCreate, createContact} = useContext(ModalCreateContext)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<iCreateContact>({
      resolver: yupResolver(createContactSchema),
    });
    return (
      <ModalSection modal={modalCreateContacts}>
        <ContainerModal>
          <HeaderModal>
            <span>Criar contato</span>
            <button onClick={fecharModalCreate}>X</button>
          </HeaderModal>
          <FormModal onSubmit={handleSubmit(createContact)}>

            <label htmlFor="full_name">Nome Completo</label>
            <input type="text" placeholder="Nome Completo" {...register("full_name")} />
            <span>{errors.full_name?.message}</span>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            <span>{errors.email?.message}</span>

            <label htmlFor="phone">Telefone</label>
            <input type="text" placeholder="Telefone" {...register("phone")} />
            <span>{errors.phone?.message}</span>
            
            <button type="submit">Criar</button>
          </FormModal>
        </ContainerModal>
      </ModalSection>
    );
  };