import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeUpdateTodoUseCase } from "@/use-cases/factories/make-update-todo-use-case";

export async function update(request: FastifyRequest, reply: FastifyReply) {
    const findUserByUserQuerySchema = z.object({
        sub: z.string(),
    });

    const { sub: userId } = findUserByUserQuerySchema.parse(request.user.sign);

    const updatetodoBodySchema = z.object({
        content: z.string(),
        is_complete: z.boolean(),
    });

    const updateTodoParamsSchema = z.object({
        id: z.string(),
    });

    const {content, is_complete} = updatetodoBodySchema.parse(request.body);

    const {id} = updateTodoParamsSchema.parse(request.params);

    const todoUseCase = makeUpdateTodoUseCase();

    await todoUseCase.execute({
        userId,
        content,
        is_complete,
    });

    return reply.status(201).send();
}
