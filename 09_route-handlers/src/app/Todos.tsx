'use client'
import { useState, useEffect } from 'react'
import { Todo } from './api/todos/route'

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const fetchTodos = async () => {
    const res = await fetch('/api/todos')
    const data = await res.json()
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo) return

    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo }),
    })

    setNewTodo('')
    fetchTodos()
  }

  return (
    <>
      <h2 className='text-2xl font-bold mb-5'>Lista zadań ({todos.length})</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='mb-2'>
            {todo.title}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='border p-1 text-white rounded'
        />
        <button type='submit' className='border p-1 ml-2 rounded'>
          Dodaj
        </button>
      </form>
    </>
  )
}
