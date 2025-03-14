import TodoList from './TodoList'
import { getTodos, createTodo, updateTodo } from './todo'

export default async function Home() {
  const todos = await getTodos()

  return (
    <div className='p-10'>
      <TodoList createTodo={createTodo} todos={todos} updateTodo={updateTodo} />
    </div>
  )
}
