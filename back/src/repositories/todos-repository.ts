import { Prisma, Todo } from "@prisma/client";

export interface TodosRepository {
    findAllByUser(userId: string): Promise<Todo[] | null>;
    findById(id: string, userId: string): Promise<Todo | null>;
    create(data: Prisma.TodoUncheckedCreateInput): Promise<Todo>;
}
