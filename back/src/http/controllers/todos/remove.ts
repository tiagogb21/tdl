import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeRemoveTodoUseCase } from "@/use-cases/factories/make-remove-todo-use-case";

export async function remove(request: FastifyRequest, reply: FastifyReply) {
    const findUserByUserQuerySchema = z.object({
        sub: z.string(),
    });

    const { sub: userId } = findUserByUserQuerySchema.parse(request.user.sign);

    const removetodoBodySchema = z.object({
        id: z.string(),
    });

    const {id} = removetodoBodySchema.parse(request.params);

    const todoUseCase = makeRemoveTodoUseCase();

    await todoUseCase.execute({
        id,
        userId,
    });

    return reply.status(201).send();
}
