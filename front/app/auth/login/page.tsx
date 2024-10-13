"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormInput } from "@/app/components/common/FormInput";
import { loginSchema } from "@/app/schemas/loginSchema";
import { redirect } from "next/navigation";

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
        resolver: yupResolver(loginSchema),
    });

    const [error, setError] = useState<string>();

    const login = async (data: { email: string; password: string }) => {
        const result = await signIn("auth-todo", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (result?.error) {
            setError("Login Inválido");
            redirect("/auth/login");
        }

        redirect("/");
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(login)}
                className="flex flex-col gap-6 pt-10"
            >
                <FormInput<FormData>
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    errors={errors}
                    register={{ ...register("email") }}
                />
                <FormInput<FormData>
                    id="password"
                    type="password"
                    label="Senha"
                    name="password"
                    errors={errors}
                    register={{ ...register("password") }}
                />

                <button
                    className="rounded-lg bg-project-blue-dark text-white py-2"
                    type="submit"
                >
                    Entrar
                </button>
            </form>
            {error && (
                <div role="alert" className="text-red-400">
                    <span>{error}</span>
                </div>
            )}
        </>
    );
}
