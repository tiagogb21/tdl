import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            todo: TodoSlice,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
