import { TodoItem } from './TodoItem.jsx'

export const TodoList = ({ todos }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  )
}
