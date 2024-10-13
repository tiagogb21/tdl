import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";
import StoreProvider from "./providers/StoreProvider";
import AuthProvider from "./providers/AuthProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Todo List",
    description: "Create a todo list project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StoreProvider>
                <AuthProvider>
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        <Header />
                        <div className="min-h-screen bg-project-gray-600">
                            {children}
                        </div>
                    </body>
                </AuthProvider>
            </StoreProvider>
        </html>
    );
}
