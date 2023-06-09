import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schemas";
import { CadastroContext, iCadastroData } from "../../contexts/contextSignUp";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { ContainerForm, ContainerGeral, DivSenha, Form } from "./styled";
import { Link } from "react-router-dom";

export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCadastroData>({
    resolver: yupResolver(formSchema),
  });

  const { toggleShowSenha, showSenha, onSubmit } = useContext(CadastroContext);

  return (
    <ContainerGeral>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Crie sua conta</h2>
          <label htmlFor="full_name">Nome Completo</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            {...register("full_name")}
          />
          <span>{errors.full_name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <DivSenha>
            <input
              type={showSenha ? "text" : "password"}
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <button type="button" onClick={(e) => toggleShowSenha(e)}>
              {showSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </DivSenha>

          <span>{errors.password?.message}</span>

          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu telefone. Ex.: 11 999999999"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <button type="submit">Cadastrar</button>
        </Form>
        <p>Já possui uma conta?</p>
        <Link to={"/"}>Login</Link>
      </ContainerForm>
    </ContainerGeral>
  );
};
