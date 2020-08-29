import { TodoItem } from './TodoItem.jsx'

export class TodoList extends React.Component {
  state = {
    todos: null,
  }

  componentDidMount() {
    this.loadTodos()
  }

  loadTodos = () => {
    this.setState({ todos: this.props.todos })
  }

  onTodoClick = (idx) => {
    let todos = this.state.todos
    if (todos[idx].isChecked) {
      todos[idx].isChecked = false
      todos[idx].completedAt = ''
    } else {
      todos[idx].isChecked = true
      todos[idx].completedAt = this.getCurrentTime()
    }
    this.setState({ todos })
  }

  getCurrentTime = () => {
    let date = new Date()
    let formDate =
      +date.getDate() +
      '/' +
      +(date.getMonth() + 1) +
      '/' +
      date.getFullYear() +
      '  ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    return formDate
  }

  render() {
    let todos = this.state.todos
    return (
      <div className='todo-list'>
        {todos &&
          todos.map((todo, idx) => (
            <TodoItem
              key={todo.txt}
              todo={todo}
              idx={idx}
              onTodoClick={this.onTodoClick}
            />
          ))}
      </div>
    )
  }
}
