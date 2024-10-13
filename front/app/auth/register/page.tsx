'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInput } from "@/app/components/common/FormInput";

const schema = yup.object({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup.string().email().required("Email é um campo obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Senha é obrigatória"),
}).required();

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 pt-4">
            <FormInput<FormData>
                id="name"
                label="Nome"
                name="name"
                errors={errors}
                register={{...register('name')}}
            />
            <FormInput<FormData>
                id="email"
                type="email"
                label="Email"
                name="email"
                errors={errors}
                register={{...register('email')}}
            />
            <FormInput<FormData>
                id="password"
                type="password"
                label="Senha"
                name="password"
                errors={errors}
                register={{...register('password')}}
            />

            <button className="rounded-lg bg-project-blue-dark text-white py-2" type="submit">Cadastrar</button>
        </form>
    );
}
