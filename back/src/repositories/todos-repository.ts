import { Prisma, Todo } from "@prisma/client";

export interface TodosRepository {
    findAllByUser({userId} : {userId: string}): Promise<Todo[] | null>;
    findById({id, userId}: {id: string, userId: string}): Promise<Todo | null>;
    create(data : Prisma.TodoUncheckedCreateInput): Promise<Todo>;
    update({userId, data} : {userId: string, data: Prisma.TodoUncheckedUpdateInput}): Promise<Todo>;
    remove({id, userId} : {id: string, userId: string}): void;
}
