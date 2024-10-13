import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { Todo } from "@prisma/client";

interface UpdateTodoUseCaseRequest {
    userId: string;
    content: string;
    is_complete: boolean;
}

interface UpdateTodoUseCaseResponse {
    todo: Todo;
}

export class UpdateTodoUseCase {
    constructor(
        private todosRepository: PrismaTodosRepository,
        private usersRepository: PrismaUsersRepository
    ) {}

    async execute({
        userId,
        content,
        is_complete,
    }: UpdateTodoUseCaseRequest): Promise<UpdateTodoUseCaseResponse> {
        const todo = await this.todosRepository.update({
            userId,
            data: { content, is_complete },
        });

        return {
            todo,
        };
    }
}
