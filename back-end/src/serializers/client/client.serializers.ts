import * as yup from "yup";

import {
  iClient,
  iClientRequest,
  iClientUpdate,
} from "../../interfaces/client.interfaces";
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
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
  created_at: yup.date(),
  phone: yup.string(),
  email: yup.string().email(),
  full_name: yup.string(),
  id: yup.string().uuid(),
});

export const clientSerializerUpdate: yup.Schema<iClientUpdate> = yup
  .object()
  .shape({
    password: yup.string(),
    phone: yup.string(),
    email: yup.string().email(),
    full_name: yup.string(),
  });

export const listClients = yup.array(returnClientSerializer);
