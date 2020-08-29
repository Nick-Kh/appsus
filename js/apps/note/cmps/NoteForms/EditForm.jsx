import { NoteForm } from './NoteForm.jsx'

export class EditForm extends React.Component {
  state = {
    currNote: null,
    todos: [],
  }

  componentDidMount() {
    this.setState({ currNote: { ...this.props.note } })
    let todos = [...this.props.note.info.todos]
    let newTodos = []
    todos.forEach((todo, idx) => {
      newTodos[idx] = todo.txt
    })
    this.setState({ todos: newTodos })
  }

  onTitleChange = (title) => {
    let note = { ...this.state.currNote }
    note.info.title = title
    this.setState({ currNote: note })
  }

  onUrlChange = (url) => {
    let note = { ...this.state.currNote }
    note.info.url = url
    this.setState({ currNote: note })
  }

  onTextChange = (txt) => {
    let note = { ...this.state.currNote }
    note.info.txt = txt
    this.setState({ currNote: note })
  }

  onTodoChange = (todo, idx) => {
    let todos = this.state.todos
    todos[idx] = todo
    this.setState({ todos })
  }

  updateTodos = () => {
    let note = { ...this.state.currNote }
    let todos = this.state.todos
    todos.forEach((todo, idx) => {
      note.info.todos[idx].txt = todo
    })
    this.setState({ currNote: note })
  }

  render() {
    return (
      <div className='edit-form'>
        {this.state.currNote ? (
          <React.Fragment>
            <NoteForm
              note={this.state.currNote}
              onTitleChange={this.onTitleChange}
              onUrlChange={this.onUrlChange}
              onTextChange={this.onTextChange}
              onTodoChange={this.onTodoChange}
              todos={this.state.todos}
            />
            <div className='edit-buttons'>
              <button
                className='note-btn'
                onClick={() => {
                  this.updateTodos()
                  this.props.onAddNote(this.state.currNote, true)
                }}>
                Save
              </button>
              <button
                className='note-btn'
                onClick={() => {
                  this.props.onAddNote(null, false)
                }}>
                Cancel
              </button>
            </div>
          </React.Fragment>
        ) : (
          ''
        )}
      </div>
    )
  }
}
