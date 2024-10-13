import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { Todo } from "@prisma/client";

interface CreateTodoUseCaseRequest {
    userId: string;
    content: string;
    is_complete: boolean;
}

interface CreateTodoUseCaseResponse {
    todo: Todo;
}

export class CreateTodoUseCase {
    constructor(
        private todosRepository: PrismaTodosRepository,
        private usersRepository: PrismaUsersRepository
    ) {}

    async execute({
        userId,
        content,
        is_complete,
    }: CreateTodoUseCaseRequest): Promise<CreateTodoUseCaseResponse> {
        const todo = await this.todosRepository.create({
            userId,
            content,
            is_complete,
        });

        return {
            todo,
        };
    }
}
