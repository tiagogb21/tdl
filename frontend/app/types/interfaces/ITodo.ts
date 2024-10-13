export interface ITodo {
    id: string;
    content: string;
    is_complete: boolean;
}

export interface IUpdatetodo {
    user_id: string
    data: ITodo;
}

export interface IDeleteTodo {
    user_id: string;
    id: string;
}
