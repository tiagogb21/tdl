'use client'

import { ShowTodoList } from "../components/home/ShowTodoList";
import { EmptyListMessages } from "../components/home/EmptyListMessages";
import { ListMessages } from "../components/home/ListMessages";
import { SearchBar } from "../components/home/SearchBar";
import { useContextSelector } from 'use-context-selector'
import { TodosContext } from "../context/providers/TodoProvider";

export default function Home() {
    const todoTransaction = useContextSelector(
        TodosContext,
        (context) => {
          return context.todos
        },
    )

    console.log(todoTransaction)

    return (
        <main className="lg:w-[40rem] mx-auto flex flex-col gap-16">
            <SearchBar />
            <div className="flex flex-col text-white gap-6">
                {/* <ListMessages todoList={todoState} />
                {todoState.length > 0 ? (
                    <ShowTodoList todoList={todoState} />
                ) : (
                    <EmptyListMessages />
                )} */}
            </div>
        </main>
    );
}
