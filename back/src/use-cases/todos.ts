import { TodosRepository } from "@/repositories/todos-repository";
import { UsersRepository } from "@/repositories/users-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { Todo } from "@prisma/client";

interface TodoUseCaseRequest {
    userId: string;
    content: string;
    is_complete: boolean;
}

interface TodoUseCaseResponse {
    todo: Todo;
}

export class TodoUseCase {
    constructor(
        private todosRepository: TodosRepository,
        private usersRepository: UsersRepository
    ) {}

    async execute({
        userId,
        content,
        is_complete,
    }: TodoUseCaseRequest): Promise<TodoUseCaseResponse> {
        const user = await this.usersRepository.findById(userId);

        if (!user) {
            throw new ResourceNotFoundError();
        }

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
