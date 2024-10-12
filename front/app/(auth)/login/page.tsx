'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInput } from "@/app/components/FormInput";

const schema = yup.object({
    email: yup.string().email().required("Email é um campo obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Senha é obrigatória"),
}).required();

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 pt-10">
            <FormInput<FormData>
                id="email"
                label="Email"
                name="email"
                errors={errors}
                register={{...register('email')}}
            />
            <FormInput<FormData>
                id="password"
                label="Senha"
                name="password"
                errors={errors}
                register={{...register('password')}}
            />

            <button className="rounded-lg bg-project-blue-dark text-white py-2" type="submit">Entrar</button>
        </form>
    );
}
