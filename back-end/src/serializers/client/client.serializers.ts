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
  id: yup.string().uuid().notRequired(),
  full_name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  created_at: yup.date().notRequired(),
  contacts: yup.array(returnContactSerializer),
});
