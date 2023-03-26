import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { CadastroContext } from "../../contexts/contextSignUp";
import { iLoginData, LoginContext } from "../../contexts/contextLogin";
import { loginSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { ContainerLogin, DivSenhaLogin, Form } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { onSubmit } = useContext(LoginContext);
  const { toggleShowSenha, showSenha } = useContext(CadastroContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <ContainerLogin>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="senha">Senha</label>
        <DivSenhaLogin>
          <input
            type={showSenha ? "text" : "password"}
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button type="button" onClick={toggleShowSenha}>
            {showSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </DivSenhaLogin>
        <span>{errors.password?.message}</span>

        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <Link to={"/signup"}>Cadastre-se</Link>
      </Form>
    </ContainerLogin>
  );
};
