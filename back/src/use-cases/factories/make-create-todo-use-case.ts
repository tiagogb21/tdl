import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateTodoUseCase } from "../create-todo";

export function makeCreateTodoUseCase() {
    const todosRepository = new PrismaTodosRepository();
    const usersRepository = new PrismaUsersRepository();

    const useCase = new CreateTodoUseCase(todosRepository, usersRepository);

    return useCase;
}
