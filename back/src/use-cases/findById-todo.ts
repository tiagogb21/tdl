import { TodosRepository } from "@/repositories/todos-repository";
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { Todo } from "@prisma/client";

interface FindByIdUseCaseRequest {
    userId: string;
    id: string;
}

interface FindByIdUseCaseResponse {
    todo: Todo;
}

export class FindByIdUseCase {
    constructor(private todosRepository: TodosRepository) {}

    async execute({
        userId,
        id,
    }: FindByIdUseCaseRequest): Promise<FindByIdUseCaseResponse> {
        const todo = await this.todosRepository.findById({userId, id});

        if (!todo) {
            throw new InvalidCredentialsError();
        }

        return {
            todo,
        };
    }
}
