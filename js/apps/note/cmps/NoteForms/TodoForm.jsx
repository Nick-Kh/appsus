export const TodoForm = ({
  onTodoChange,
  onTitleChange,
  onAddTodo,
  todos,
  currTodo,
  currTitle,
}) => {
  return (
    <div className='text-form'>
      <input
        type='text'
        placeholder='Todos title'
        onChange={(ev) => onTitleChange(ev.target.value)}
        value={currTitle}
      />
      <div className='curr-todo'>
        {todos.map((todo) => (
          <div key={todo.txt}>
            <input
              type='text'
              placeholder='Enter to do...'
              onChange={(ev) => onTodoChange(ev.target.value)}
              value={todo.txt}
              disabled
              required
            />
          </div>
        ))}
        <div className='todo-item'>
          <input
            type='text'
            placeholder='Enter new todo...'
            onChange={(ev) => onTodoChange(ev.target.value)}
            value={currTodo}
            required
          />
          <i className='fas fa-plus-circle' onClick={onAddTodo}></i>
        </div>
      </div>
    </div>
  )
}
