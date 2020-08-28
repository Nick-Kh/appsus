import { TextForm } from './NoteForms/TextForm.jsx'
import { ImgForm } from './NoteForms/ImgForm.jsx'

export class AddNote extends React.Component {
  state = {
    url: null,
    note: {
      type: 'NoteText',
      info: {},
    },
  }

  componentDidMount() {
    this.setState({ formType: 'text' })
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
    console.log(title)
    let note = { ...this.state.note }
    note.info.title = title
    this.setState({ note })
  }

  onTextChange = (txt) => {
    let note = { ...this.state.note }
    note.info.txt = txt
    this.setState({ note })
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
          onClick={() => this.props.onAddNote(this.state.note)}>
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
