import { remove, update } from "@/app/lib/TodoSlice";
import { ITodo } from "@/app/types/interfaces/ITodo";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface ShowTodoListProp {
    todoList: ITodo[],
}

export const ShowTodoList = ({todoList} : ShowTodoListProp) => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-3">
            {todoList.map(({ id, content, is_complete }) => (
                <div
                    key={id}
                    className="flex bg-project-gray-400 rounded-lg p-4 gap-2"
                >
                    <button
                        className="flex-1 flex"
                        type="button"
                        // onClick={() => toggleTodoClicked(id)}
                    >
                        <input
                            className="bg-inherit"
                            type="text"
                            value={content}
                            onChange={(e) =>
                                (dispatch(update({id, content: e.target.value, is_complete})))
                            }
                        />
                    </button>
                    <button type="button" onClick={() => dispatch(remove({id}))}>
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
    );
};
