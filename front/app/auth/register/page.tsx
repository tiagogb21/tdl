'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInput } from "@/app/components/common/FormInput";
import { registerSchema } from "@/app/schemas/registerSchema";

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
        resolver: yupResolver(registerSchema),
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
