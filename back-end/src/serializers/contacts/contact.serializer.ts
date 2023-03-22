import * as yup from "yup";
import {
  iContact,
  iContactRequest,
  iContactUpdate,
} from "../../interfaces/contact.interface";

export const requestContactSerializer: yup.Schema<iContactRequest> = yup
  .object()
  .shape({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

export const returnContactSerializer: yup.Schema<iContact> = yup
  .object()
  .shape({
    id: yup.string().uuid(),
    full_name: yup.string(),
    email: yup.string().email(),
    phone: yup.string(),
    client: yup.string(),
    created_at: yup.date(),
  });

export const updateContactSerializer: yup.Schema<iContactUpdate> = yup
  .object()
  .shape({
    full_name: yup.string(),
    email: yup.string().email(),
    phone: yup.string(),
  });
