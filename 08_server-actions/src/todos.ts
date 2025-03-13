import fs from 'node:fs/promises'
import { revalidateTag, unstable_cache } from 'next/cache'

export interface Todo {
  completed: boolean
  id: string
  title: string
}

export async function getTodosFromFile() {
  const file = await fs.readFile('todos.json', 'utf8')
  return JSON.parse(file.toString()) as Todo[]
}

export const getTodos = unstable_cache(getTodosFromFile, ['todo-list'], {
  tags: ['todos'],
})

export async function getTodoCount() {
  'use server'
  const todos = await getTodos()
  return todos.length
}

export async function addTodo(title: string) {
  'use server'
  const todos = await getTodos()
  const newTodo = {
    id: Math.random().toString(36).substring(7),
    title,
    completed: false,
  }
  todos.push(newTodo)
  await fs.writeFile('todos.json', JSON.stringify(todos, null, 2))
  revalidateTag('todos')
}
