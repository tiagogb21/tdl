import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { UpdateTodoUseCase } from "../update-todo";

export function makeUpdateTodoUseCase() {
    const todosRepository = new PrismaTodosRepository();
    const usersRepository = new PrismaUsersRepository();

    const useCase = new UpdateTodoUseCase(todosRepository, usersRepository);

    return useCase;
}
