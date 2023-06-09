import * as yup from "yup";

export const formSchema = yup.object().shape({
  full_name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .required("Senha é obrigatória"),
  phone: yup.string().required("Telefone obrigatório").matches(
    /[1-9]{2} 9[1-9]\d{3}\d{4}/,
    "Insira um telefone válido. Ex.: 11 999999999",
  ),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha é obrigatória"),
});

export const editClientSchema = yup.object().shape({
  password: yup.string(),
  phone: yup.string().matches(
    /^$|[1-9]{2} 9[1-9]\d{3}\d{4}?$/,
    "Insira um telefone válido. Ex.: 11 999999999",
  ).notRequired(),
  email: yup.string().email(),
  full_name: yup.string(),
})

export const createContactSchema = yup.object().shape({
  full_name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  phone: yup.string().required("Telefone obrigatório").matches(
    /[1-9]{2} 9[1-9]\d{3}\d{4}/,
    "Insira um telefone válido. Ex.: 11 999999999",
  ),
})

export const editContactSchema = yup.object().shape({
  phone: yup.string().matches(
    /^$|[1-9]{2} 9[1-9]\d{3}\d{4}?$/,
    "Insira um telefone válido. Ex.: 11 999999999",
  ).notRequired(),
  email: yup.string().email(),
  full_name: yup.string(),
})
