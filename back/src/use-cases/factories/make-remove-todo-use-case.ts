import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { RemoveTodoUseCase } from "../remove-todo";

export function makeRemoveTodoUseCase() {
    const todosRepository = new PrismaTodosRepository();

    const useCase = new RemoveTodoUseCase(todosRepository);

    return useCase;
}
