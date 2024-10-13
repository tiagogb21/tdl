import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";

interface RemoveTodoUseCaseRequest {
    id: string;
    userId: string;
}

interface RemoveTodoUseCaseResponse {
    message: string;
}

export class RemoveTodoUseCase {
    constructor(
        private todosRepository: PrismaTodosRepository,
    ) {}

    async execute({
        userId,
        id,
    }: RemoveTodoUseCaseRequest): Promise<RemoveTodoUseCaseResponse> {
        await this.todosRepository.remove({
            userId,
            id,
        });

        return {
            message: 'success',
        };
    }
}
