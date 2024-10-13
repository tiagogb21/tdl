import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFindByIdTodoUseCase } from "@/use-cases/factories/make-find-by-id-todo-use-case";

export async function findById(request: FastifyRequest, reply: FastifyReply) {
    const findByUserParamsSchema = z.object({
        id: z.string(),
    });

    const findUserByUserQuerySchema = z.object({
        sub: z.string(),
    });

    const { sub: userId } = findUserByUserQuerySchema.parse(request.user.sign);

    const { id } = findByUserParamsSchema.parse(request.params);

    const getTodo = makeFindByIdTodoUseCase();

    const { todo } = await getTodo.execute({
        id,
        userId,
    });

    return reply.status(200).send({
        todo: {
            ...todo,
            password_hash: undefined,
        },
    });
}
