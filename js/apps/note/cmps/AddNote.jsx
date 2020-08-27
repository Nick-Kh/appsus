import { TextForm } from './NoteForms/TextForm.jsx'
import { ImgForm } from './NoteForms/ImgForm.jsx'
import { makeId } from '../services/utils-service.js'

export class AddNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null,
      note: {
        type: 'NoteText',
        info: {},
      },
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.onInputURL = this.onInputURL.bind(this)
    this.onImageUpload = this.onImageUpload.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
  }

  componentDidMount() {
    this.setState({ formType: 'text' })
  }

  inputSelect(formType) {
    let note = { ...this.state.note }
    note.type = 'Note' + formType
    this.setState({ note })
  }

  onInputURL(url) {
    this.setState({ url })
  }

  onImageUpload(ev) {
    ev.preventDefault()
    let note = { ...this.state.note }
    note.info.url = this.state.url
    this.setState({ note })
  }

  onTitleChange(title) {
    console.log(title)
    let note = { ...this.state.note }
    note.info.title = title
    this.setState({ note })
  }

  onTextChange(txt) {
    let note = { ...this.state.note }
    note.info.txt = txt
    this.setState({ note })
  }

  getFormCmp(selected) {
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
            imgURL={this.state.url}
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
          <button onClick={() => this.props.onAddNote(this.state.note)}>
            <i className='fas fa-plus-circle'></i>
            Add Note
          </button>
        </div>
        <div className='input-select'>
          <i
            className='fas fa-font fa-2x'
            onClick={() => this.inputSelect('Text')}></i>
          <i
            className='far fa-image fa-2x'
            onClick={() => this.inputSelect('Img')}></i>
          <i
            className='fas fa-list fa-2x'
            onClick={() => this.inputSelect('Todos')}></i>
          <i
            className='fas fa-video fa-2x'
            onClick={() => this.inputSelect('Vid')}></i>
        </div>
      </section>
    )
  }
}
