import { PrismaTodosRepository } from '@/repositories/prisma/prisma-todos-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { TodoUseCase } from '../todos'

export function makeTodoUseCase() {
  const todosRepository = new PrismaTodosRepository()
  const usersRepository = new PrismaUsersRepository()

  const useCase = new TodoUseCase(todosRepository, usersRepository)

  return useCase
}