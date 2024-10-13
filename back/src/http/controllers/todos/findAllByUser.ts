import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFindAllTodoUseCase } from "@/use-cases/factories/make-find-all-todo-use-case";

export async function findAllByUser(request: FastifyRequest, reply: FastifyReply) {
    const findUserByUserQuerySchema = z.object({
        sub: z.string(),
    });

    const { sub: userId } = findUserByUserQuerySchema.parse(request.user.sign);

    const makeFindAllTodo = makeFindAllTodoUseCase();

    const { todos } = await makeFindAllTodo.execute({
        userId,
    });

    return reply.status(200).send({
        todos
    });
}
