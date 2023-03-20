import * as yup from "yup";
import { iContact } from "../../interfaces/contact.interface";

export const returnContactSerializer: yup.Schema<iContact> = yup
  .object()
  .shape({
    id: yup.string().uuid().notRequired(),
    full_name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    phone: yup.string().notRequired(),
    clientId: yup.string().notRequired(),
    created_at: yup.date().notRequired(),
  });
