import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import { ITodo } from "@/app/types/interfaces/ITodo";

const initialState: ITodo = {
    id: '',
    content: '',
    is_complete: false,
}

export const SearchBar = () => {
    const [todo, setTodo] = useState<ITodo>(initialState);

    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            id: uuidv4(),
            content: e.target.value,
            is_complete: false,
        });
    };

    return (
        <form action="" className="w-full flex gap-2 -mt-6">
            <input
                className="flex-1 text-project-gray-300 bg-project-gray-500 rounded-lg p-4"
                type="text"
                value={todo.content}
                onChange={handleChangeTodo}
            />
            <button
                className="flex items-center gap-2 p-4 bg-project-blue-dark text-white rounded-lg"
                type="button"
                onClick={() => {
                    if(todo.content.length > 0) {
                        // dispatch(create(todo))
                    }
                }}
            >
                Criar{" "}
                <Image
                    src="/plus.svg"
                    alt="plus signal"
                    width={16}
                    height={16}
                />
            </button>
        </form>
    );
};
