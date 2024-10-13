import { PrismaTodosRepository } from '@/repositories/prisma/prisma-todos-repository'
import { FindAllUseCase } from '../findAll-todo'

export function makeFindAllTodoUseCase() {
  const todosRepository = new PrismaTodosRepository()

  const useCase = new FindAllUseCase(todosRepository)

  return useCase
}