import * as yup from "yup";

export const newsletterSchema = yup.object({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
});
