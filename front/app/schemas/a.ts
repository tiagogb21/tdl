import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().email().required("Email é um campo obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Senha é obrigatória"),
}).required();
