import { ITodo } from "@/app/types/interfaces/ITodo";

interface ListMessagesProp {
    todoList: ITodo[],
}

export const ListMessages = ({todoList} : ListMessagesProp) => {
    return (
        <div className="flex justify-between">
            <p className="flex text-project-blue-light gap-2">
                Tarefas criadas{" "}
                <span className="rounded-full flex justify-center items-center w-6 bg-project-gray-400">
                    {todoList.length}
                </span>
            </p>
            <p className="flex text-project-purple-light gap-2">
                Concluídas
                <span className="rounded-full flex justify-center items-center w-6 bg-project-gray-400">
                    {todoList.length}
                </span>
            </p>
        </div>
    )
}