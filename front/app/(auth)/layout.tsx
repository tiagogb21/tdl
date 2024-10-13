import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/auth/login')
    }

    return (
        <div>
            {children}
        </div>
    );
}
