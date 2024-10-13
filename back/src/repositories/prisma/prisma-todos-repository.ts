import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

import { TodosRepository } from "../todos-repository";

export class PrismaTodosRepository implements TodosRepository {
    async findAllByUser({userId}: {userId: string}) {
        const todo = await prisma.todo.findMany({
            where: {
                userId
            },
        });

        return todo;
    }

    async findById({id, userId} : {id: string, userId: string}) {
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

    async update({userId, data} : {userId: string, data: Prisma.TodoUncheckedUpdateInput}) {
        const todo = await prisma.todo.update({
            where: {
                id: data.id as string,
                userId,
            },
            data,
        });

        return todo;
    }

    async remove({id, userId} : {id: string, userId: string}) {
        await prisma.todo.delete({
            where: {
                id,
                userId,
            }
        });
    }
}
