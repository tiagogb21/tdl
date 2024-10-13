import Image from "next/image";

export const EmptyListMessages = () => {
    return (
        <div className="flex flex-col items-center border-t border-solid border-project-gray-200 px-6 py-16">
            <Image
                src="/clipboard.svg"
                alt="exclude todo"
                width={56}
                height={56}
            />
            <h2 className="font-bold">
                Você ainda não tem tarefas cadastradas
            </h2>
            <h3>Crie tarefas e organize seus itens a fazer</h3>
        </div>
    );
};
