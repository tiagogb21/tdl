import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

import { TodosRepository } from "../todos-repository";

export class PrismaTodosRepository implements TodosRepository {
    async findAllByUser(userId: string) {
        const todo = await prisma.todo.findMany({
            where: {
                userId
            },
        });

        return todo;
    }

    async findById(id: string, userId: string) {
        const todo = await prisma.todo.findUnique({
            where: {
                id,
                userId
            },
        });

        return todo;
    }

    async create(data: Prisma.TodoUncheckedCreateInput) {
        const todo = await prisma.todo.create({
            data,
        });

        return todo;
    }
}
