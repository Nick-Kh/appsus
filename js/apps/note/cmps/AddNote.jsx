import { TextForm } from './NoteForms/TextForm.jsx'
import { ImgForm } from './NoteForms/ImgForm.jsx'
import { TodoForm } from './NoteForms/TodoForm.jsx'

export class AddNote extends React.Component {
  state = {
    url: null,
    note: {
      type: 'NoteText',
      info: {},
      style: {
        backgroundColor: 'lightblue',
      },
    },
    todos: [],
    currTodo: '',
  }

  componentDidMount() {
    this.setState({ formType: 'text' })
  }

  resetForm = () => {
    let newState = {
      url: null,
      note: {
        type: 'NoteText',
        info: {},
        style: {
          backgroundColor: 'lightblue',
        },
      },
    }
    this.setState(newState)
  }

  inputSelect = (formType) => {
    let note = { ...this.state.note }
    note.type = 'Note' + formType
    this.setState({ note })
  }

  onInputURL = (url) => {
    this.setState({ url })
  }

  onImageUpload = (ev) => {
    ev.preventDefault()
    let note = { ...this.state.note }
    note.info.url = this.state.url
    this.setState({ note })
  }

  onTitleChange = (title) => {
    let note = { ...this.state.note }
    note.info.title = title
    this.setState({ note })
  }

  onTextChange = (txt) => {
    let note = { ...this.state.note }
    note.info.txt = txt
    this.setState({ note })
  }

  onTodoChange = (todo) => {
    this.setState({ currTodo: todo })
  }

  onAddTodo = () => {
    let todos = this.state.todos
    if (this.state.currTodo !== '') {
      todos.push(this.state.currTodo)
      this.setState({ todos })
      this.setState({ currTodo: '' })
    }
  }

  getFormCmp = (selected) => {
    switch (selected) {
      case 'NoteText':
        return (
          <TextForm
            onTextChange={this.onTextChange}
            onTitleChange={this.onTitleChange}
          />
        )
      case 'NoteImg':
        return (
          <ImgForm
            onInputURL={this.onInputURL}
            onImageUpload={this.onImageUpload}
            imgURL={this.state.note.info.url}
            onTitleChange={this.onTitleChange}
          />
        )
      case 'NoteTodos':
        return (
          <TodoForm
            onTitleChange={this.onTitleChange}
            onTodoChange={this.onTodoChange}
            todos={this.state.todos}
            onAddTodo={this.onAddTodo}
            currTodo={this.state.currTodo}
          />
        )
    }
  }

  render() {
    return (
      <section className='add-note'>
        <div className='input-form'>
          {this.getFormCmp(this.state.note.type)}
        </div>
        <button
          className='note-btn'
          onClick={() => {
            this.resetForm()
            this.props.onAddNote(this.state.note)
          }}>
          Add Note
        </button>

        <div className='input-select'>
          <div className='input-item' onClick={() => this.inputSelect('Text')}>
            <i className='fas fa-font fa-2x'></i>
          </div>
          <div className='input-item' onClick={() => this.inputSelect('Img')}>
            <i className='far fa-image fa-2x'></i>
          </div>
          <div className='input-item' onClick={() => this.inputSelect('Todos')}>
            <i className='fas fa-list fa-2x'></i>
          </div>
          <div className='input-item' onClick={() => this.inputSelect('Vid')}>
            <i className='fas fa-video fa-2x'></i>
          </div>
        </div>
      </section>
    )
  }
}
