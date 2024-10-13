import { TodosRepository } from "@/repositories/todos-repository";
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { Todo } from "@prisma/client";

interface FindAllUseCaseRequest {
    userId: string;
}

interface FindAllUseCaseResponse {
    todos: Todo[];
}

export class FindAllUseCase {
    constructor(private todosRepository: TodosRepository) {}

    async execute({
        userId,
    }: FindAllUseCaseRequest): Promise<FindAllUseCaseResponse> {
        const todos = await this.todosRepository.findAllByUser({
            userId,
        });

        if (!todos) {
            throw new InvalidCredentialsError();
        }

        return {
            todos,
        };
    }
}
