import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup.string().email().required("Email é um campo obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Senha é obrigatória"),
}).required();