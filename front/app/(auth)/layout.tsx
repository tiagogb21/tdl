export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="px-4 lg:w-[40rem] mx-auto flex flex-col gap-16">
            {children}
        </main>
    );
}