import Image from "next/image";

export const Header = () => {
    return (
        <header className="bg-project-gray-700">
            <div className="container mx-auto py-14">
                <div className="flex items-center justify-center">
                    <Image src="/logo.svg" alt="todo logo" width={126} height={48} />
                </div>
            </div>
        </header>
    )
}