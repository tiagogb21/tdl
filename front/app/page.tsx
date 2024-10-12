"use client";

import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

interface ITodo {
    id: string;
    content: string;
}

const inititalState = {
    id: "",
    content: "",
};

export default function Home() {
    const [todo, setTodo] = useState<ITodo>(inititalState);
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            id: uuidv4(),
            content: e.target.value,
        });
    };

    const handleCreateTodo = () => {
        if (todo.content) {
            setTodoList((prev) => [...prev, todo]);

            setTodo(inititalState);
        }
    };

    const handleDeleteTodo = (id: string) => {
        setTodoList((prev) => prev.filter((el) => el.id !== id));
    };

    const toggleTodoClicked = (id: string) => {
        setEditingTodoId(id);
    };

    const handleUpdateTodo = (id: string, newContent: string) => {
        setTodoList((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, content: newContent } : todo
            )
        );
    };

    return (
        <main className="lg:w-[40rem] mx-auto flex flex-col gap-16">
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
                    onClick={handleCreateTodo}
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
            <div className="flex flex-col text-white gap-6">
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
                {todoList.length > 0 ? (
                    <div className="flex flex-col gap-3">
                        {todoList.map(({ id, content }) => (
                            <div
                                key={id}
                                className="flex bg-project-gray-400 rounded-lg p-4 gap-2"
                            >
                                <button
                                    className="flex-1 flex"
                                    type="button"
                                    onClick={() => toggleTodoClicked(id)}
                                >
                                    <input
                                        className="bg-inherit"
                                        type="text"
                                        value={content}
                                        onChange={(e) =>
                                            handleUpdateTodo(id, e.target.value)
                                        }
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDeleteTodo(id)}
                                >
                                    <Image
                                        src="/garbage.svg"
                                        alt="exclude todo"
                                        width={14}
                                        height={14}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
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
                )}
            </div>
        </main>
    );
}
