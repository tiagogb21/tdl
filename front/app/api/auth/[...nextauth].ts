/* eslint-disable */
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

interface IUser {
    token: string;
}

interface IToken extends JWT {
    user: IUser;
}

const nextAuthOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: "auth-todo",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Digite o seu e-mail",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Digite a sua senha",
                },
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:3333/users", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                });
                const result = await res.json();

                if (res.ok) {
                    return result.data;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: IToken; user?: IUser }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: IToken }) {
            if (token.user) {
                session.user = token.user;
            }
            return session;
        },
    },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
