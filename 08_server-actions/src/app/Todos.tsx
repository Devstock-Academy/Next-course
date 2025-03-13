'use client'
import { useState } from 'react'
import { Todo } from '@/todos'

export default function Todos({
  todos,
  addTodo,
  todoCount,
}: {
  todos: Todo[]
  addTodo: (title: string) => Promise<void>
  todoCount: number
}) {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <>
      <h2 className='text-2xl font-bold mb-5'> Lista zadań ({todoCount})</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='mb-2'>
            {todo.title}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='border p-1 rounded text-white'
        />
        <button type='submit' className='border p-1 ml-2 rounded'>
          Dodaj
        </button>
      </form>
    </>
  )
}
