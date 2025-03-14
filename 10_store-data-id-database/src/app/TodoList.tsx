'use client'

import { useState } from 'react'

interface Todo {
  id: number
  title: string
  description?: string | null
  done: boolean
  timestamp: string | Date // or Date, depending on how you parse it
}

export default function TodoList({
  todos,
  createTodo,
  updateTodo,
}: {
  todos: Todo[]
  createTodo: (title: string, description?: string) => void
  updateTodo: (todoId: number, done: boolean) => void
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodo = async () => {
    createTodo(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <h1 className='text-lg font-bold mb-8'>To-Do List</h1>
      <div className='flex space-x-4'>
        <input
          className='p-2'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Task Title'
        />
        <input
          type='text'
          className='p-2'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Optional Description'
        />
        <button className='pointer' onClick={addTodo}>
          Add Task
        </button>
      </div>
      <div className='p-2'>
        {todos.map((todo) => (
          <div className='flex flex-row gap-x-4' key={todo.id}>
            <h3>Title: {todo.title}</h3>
            <p>Description: {todo.description}</p>
            <p>Status: {todo.done ? 'Done' : 'Pending'}</p>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={(e) => {
                updateTodo(todo.id, e.target.checked)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
