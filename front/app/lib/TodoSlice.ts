"use client";

import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
    id: string;
    content: string;
    is_complete: boolean;
}

const initialState: TodoState[] = [];

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Omit<TodoState, 'id'>>) => {
            state.push({
                id: uuidv4(),
                content: action.payload.content,
                is_complete: action.payload.is_complete ?? false,
            });
        },
        update: (state, action: PayloadAction<TodoState>) => {
            const { id, content, is_complete } = action.payload;
            const index = state.findIndex(todo => todo.id === id);

            if (index !== -1) {
                state[index].content = content ?? state[index].content;
                state[index].is_complete = is_complete ?? state[index].is_complete;
            }
        },
        remove: (state, action: PayloadAction<{id: string}>) => {
            const todoTarget = state.findIndex((el) => el.id !== action.payload.id);
            if(todoTarget !== -1) {
                state.splice(todoTarget, 1)
            }
        },
    },
});

export const { add, update, remove } = TodoSlice.actions;
export default TodoSlice.reducer;
