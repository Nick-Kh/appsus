export const TodoItem = ({ todo, idx, onTodoClick }) => {
  return (
    <div className={`todo-list-item`} onClick={() => onTodoClick(idx)}>
      <h1 className={`${todo.isChecked ? 'todo-checked' : ''}`}>{todo.txt}</h1>
      <div className='item-completed'>
        {todo.isChecked ? (
          <span className='date-completed'>
            Completed at: {todo.completedAt}
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
