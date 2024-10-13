"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    content: string;
    isComplete: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push({
                id: action.payload.id,
                content: action.payload.content,
                isComplete: action.payload.isComplete ?? false,
            });
        },

        updateTodo: (state, action: PayloadAction<Partial<Todo> & { id: string }>) => {
            const { id, content, isComplete } = action.payload;
            const todo = state.find(todo => todo.id === id);

            if (todo) {
                if (content !== undefined) todo.content = content;
                if (isComplete !== undefined) todo.isComplete = isComplete;
            }
        },

        removeTodo: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
