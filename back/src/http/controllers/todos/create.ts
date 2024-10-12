import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeTodoUseCase } from "@/use-cases/factories/make-todo-use-case";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createtodoParamsSchema = z.object({
        userId: z.string().uuid(),
    });

    const createtodoBodySchema = z.object({
        content: z.string(),
        is_complete: z.boolean(),
    });

    const { userId } = createtodoParamsSchema.parse(request.params);
    const {content, is_complete} = createtodoBodySchema.parse(request.body);

    const todoUseCase = makeTodoUseCase();

    await todoUseCase.execute({
        userId,
        content,
        is_complete,
    });

    return reply.status(201).send();
}
