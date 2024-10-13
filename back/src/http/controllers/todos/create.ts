import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateTodoUseCase } from "@/use-cases/factories/make-create-todo-use-case";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const findUserByUserQuerySchema = z.object({
        sub: z.string(),
    });

    const { sub: userId } = findUserByUserQuerySchema.parse(request.user.sign);

    const createtodoBodySchema = z.object({
        content: z.string(),
        is_complete: z.boolean(),
    });

    const {content, is_complete} = createtodoBodySchema.parse(request.body);

    const todoUseCase = makeCreateTodoUseCase();

    await todoUseCase.execute({
        userId,
        content,
        is_complete,
    });

    return reply.status(201).send();
}
