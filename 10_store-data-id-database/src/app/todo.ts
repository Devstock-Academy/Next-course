'use server'

import { prisma } from '../lib/db'
import { revalidateTag, unstable_cache } from 'next/cache'

export async function createTodo(title: string, description?: string) {
  const newTodo = await prisma.todo.create({
    data: {
      title,
      description,
    },
  })
  revalidateTag('todos')
  return newTodo.id
}

async function getTodosFromDb() {
  return prisma.todo.findMany({
    orderBy: { timestamp: 'desc' },
  })
}

export const getTodos = unstable_cache(getTodosFromDb, ['todo-list'], {
  tags: ['todos'],
})

export async function updateTodo(todoId: number, done: boolean) {
  await prisma.todo.update({
    where: { id: todoId },
    data: { done },
  })
  revalidateTag('todos')
  return
}
