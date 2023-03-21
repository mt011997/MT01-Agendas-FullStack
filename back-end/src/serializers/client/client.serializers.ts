import * as yup from "yup";
import { iClient, iClientRequest } from "../../interfaces/client.interfaces";
import { returnContactSerializer } from "../contacts/contact.serializer";

export const createClientSerializer: yup.Schema<iClientRequest> = yup
  .object()
  .shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
  });

export const returnClientSerializer: yup.Schema<iClient> = yup.object().shape({
  contacts: yup.array(returnContactSerializer),
  created_at: yup.date().notRequired(),
  phone: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  full_name: yup.string().notRequired(),
  id: yup.string().uuid().notRequired(),
});

export const listClients = yup.array(returnClientSerializer);
