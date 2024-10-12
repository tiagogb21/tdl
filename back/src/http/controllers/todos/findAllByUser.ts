import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetTodoProfileUseCase } from "@/use-cases/factories/make-get-todo-profile-use.case";

export async function findAllByUser(request: FastifyRequest, reply: FastifyReply) {
    const findAllByUserBodySchema = z.object({
        userId: z.string(),
    });

    const { userId } = findAllByUserBodySchema.parse(request.query);

    const getTodoProfile = makeGetTodoProfileUseCase();

    const { todo } = await getTodoProfile.execute({
        userId,
    });

    return reply.status(200).send({
        todo: {
            ...todo,
            password_hash: undefined,
        },
    });
}
