'use client'

import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "@/app/lib/axios";
import { IDeleteTodo, ITodo, IUpdatetodo } from "@/app/types/interfaces/ITodo";

interface TodoContextType {
    todos: ITodo[];
    fetchTodos: (query?: string) => Promise<void>;
    createTodo: (data: ITodo) => Promise<void>;
    updateTodo: (data: IUpdatetodo) => Promise<void>;
    deleteTodo: (data: IDeleteTodo) => Promise<void>;
}

interface TodosProviderProps {
    children: ReactNode;
}

export const TodosContext = createContext({} as TodoContextType);

export function TodosProvider({ children }: TodosProviderProps) {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = useCallback(async (query?: string) => {
        const response = await api.get("todos");

        setTodos(response.data);
    }, []);

    const createTodo = useCallback(
        async (data: ITodo) => {
            const { id, content, is_complete } = data;

            const response = await api.post("todos", {
                id,
                content,
                is_complete,
            });

            setTodos((state) => [response.data, ...state]);
        },
        []
    );

    const updateTodo = useCallback(
        async ({ user_id, data } : IUpdatetodo) => {
            const { id, content, is_complete } = data;

            const response: ITodo = await api.post(`todos/update/${id}&user_id=${user_id}`, {
                content,
                is_complete,
            });

            setTodos((state) => [...state.filter((el) => el.id !== id), response]);
        },
        []
    );

    const deleteTodo = useCallback(
        async ({ user_id, id } : IDeleteTodo) => {
            await api.post(`todos/delete/${id}&user_id=${user_id}`, {
                id,
                user_id,
            });

            setTodos((state) => [...state.filter((el) => el.id !== id)]);
        },
        []
    );

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <TodosContext.Provider
            value={{
                todos,
                fetchTodos,
                createTodo,
                updateTodo,
                deleteTodo,
            }}
        >
            {children}
        </TodosContext.Provider>
    );
}
