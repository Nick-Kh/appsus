import { TextForm } from './NoteForms/TextForm.jsx'
import { ImgForm } from './NoteForms/ImgForm.jsx'
import { TodoForm } from './NoteForms/TodoForm.jsx'

export class AddNote extends React.Component {
  state = {
    url: '',
    note: {
      type: 'NoteText',
      info: {
        todos: [],
        title: '',
        url: '',
        txt: '',
      },
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

  resetForm = (currForm) => {
    let newState = {
      url: '',
      note: {
        type: currForm,
        info: {
          todos: [],
          title: '',
          url: '',
          txt: '',
        },
        style: {
          backgroundColor: 'lightblue',
        },
      },
      todos: [],
      currTodo: '',
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
      let note = { ...this.state.note }
      todos.push(this.state.currTodo)
      note.info.todos = todos
      this.setState({ note })
      this.setState({ currTodo: '' })
    }
  }

  getFormCmp = (selected) => {
    switch (selected) {
      case 'NoteText':
        return (
          <TextForm
            currTitle={this.state.note.info.title}
            currText={this.state.note.info.txt}
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
            currUrl={this.state.url}
          />
        )
      case 'NoteTodos':
        return (
          <TodoForm
            onTitleChange={this.onTitleChange}
            currTitle={this.state.note.info.title}
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
        <div className='add-btns'>
          <button
            className='note-btn'
            onClick={() => {
              this.resetForm(this.state.note.type)
              this.props.onAddNote(this.state.note)
            }}
            disabled={
              (this.state.note.type === 'NoteImg' &&
                this.state.note.info.url === '') ||
              (this.state.note.type === 'NoteTodos' &&
                this.state.note.info.todos.length === 0) ||
              (this.state.note.type === 'NoteText' &&
                this.state.note.info.txt === '')
            }>
            Add Note
          </button>
          <button
            className='note-btn'
            onClick={() => this.resetForm(this.state.note.type)}>
            Clear
          </button>
        </div>

        <div className='input-select'>
          <div
            className={`input-item ${
              this.state.note.type === 'NoteText' ? 'selected' : ''
            }`}
            onClick={() => this.inputSelect('Text')}>
            <i className='fas fa-font fa-2x'></i>
          </div>
          <div
            className={`input-item ${
              this.state.note.type === 'NoteImg' ? 'selected' : ''
            }`}
            onClick={() => this.inputSelect('Img')}>
            <i className='far fa-image fa-2x'></i>
          </div>
          <div
            className={`input-item ${
              this.state.note.type === 'NoteTodos' ? 'selected' : ''
            }`}
            onClick={() => this.inputSelect('Todos')}>
            <i className='fas fa-list fa-2x'></i>
          </div>
          <div
            className={`input-item ${
              this.state.note.type === 'NoteVid' ? 'selected' : ''
            }`}
            onClick={() => this.inputSelect('Vid')}>
            <i className='fas fa-video fa-2x'></i>
          </div>
        </div>
      </section>
    )
  }
}
