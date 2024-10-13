"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/interfaces/ITodo";

const initialState: ITodo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.push({
                id: action.payload.id,
                content: action.payload.content,
                is_complete: action.payload.is_complete ?? false,
            });
        },

        updateTodo: (state, action: PayloadAction<Partial<ITodo> & { id: string }>) => {
            const { id, content, is_complete } = action.payload;
            const todo = state.find(todo => todo.id === id);

            if (todo) {
                if (content !== undefined) todo.content = content;
                if (is_complete !== undefined) todo.is_complete = is_complete;
            }
        },

        removeTodo: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
