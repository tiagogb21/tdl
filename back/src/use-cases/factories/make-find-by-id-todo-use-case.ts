import { PrismaTodosRepository } from '@/repositories/prisma/prisma-todos-repository'
import { FindByIdUseCase } from '../findById-todo';

export function makeFindByIdTodoUseCase() {
  const todosRepository = new PrismaTodosRepository()

  const useCase = new FindByIdUseCase(todosRepository)

  return useCase
}