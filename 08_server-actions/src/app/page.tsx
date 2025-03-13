import Todos from './Todos'
import { getTodos, addTodo, getTodoCount } from '@/todos'

export default async function Page() {
  const todos = await getTodos()
  const todoCount = await getTodoCount()

  return (
    <main className='max-w-xl mx-auto mt-5'>
      <Todos todos={todos} addTodo={addTodo} todoCount={todoCount} />
    </main>
  )
}
