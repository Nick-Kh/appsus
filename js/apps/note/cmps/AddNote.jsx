import { TextForm } from './NoteForms/TextForm.jsx'
import { ImgForm } from './NoteForms/ImgForm.jsx'
import { makeId } from '../services/utils-service.js'

export class AddNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formType: null,
      note: {
        type: '',
      },
    }
    this.onTextChange = this.onTextChange.bind(this)
  }

  componentDidMount() {
    this.setState({ formType: 'text' })
  }

  onTextChange(txt) {
    console.log(txt)
    const note = {
      id: makeId(),
      type: 'NoteText',
      info: {
        txt,
      },
    }
    this.setState({ note })
  }

  getFormCmp(selected) {
    switch (selected) {
      case 'text':
        return <TextForm onTextChange={this.onTextChange} />
      case 'img':
        return <ImgForm />
    }
  }

  render() {
    return (
      <section className='add-note'>
        <div className='input-form'>
          {this.getFormCmp(this.state.formType)}
          <i className='fas fa-font fa-2x'></i>
          <i className='far fa-image fa-2x'></i>
          <i className='fas fa-list fa-2x'></i>
          <i className='fas fa-video fa-2x'></i>
        </div>
        <i
          className='fas fa-plus-circle'
          onClick={() => this.props.onAddNote(this.state.note)}></i>
      </section>
    )
  }
}
