import { NoteForm } from '../NoteForm.jsx'

export class EditForm extends React.Component {
  state = {
    currNote: null,
  }

  componentDidMount() {
    this.setState({ currNote: this.props.note })
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
            />
            <div className='edit-buttons'>
              <button
                className='note-btn'
                onClick={() => this.props.onAddNote(this.state.currNote, true)}>
                Save
              </button>
              <button
                className='note-btn'
                onClick={() =>
                  this.props.onAddNote(this.state.currNote, false)
                }>
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
