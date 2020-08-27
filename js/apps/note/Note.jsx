import { AddNote } from './cmps/AddNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'

export class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: null,
    }
    this.onDeleteNote = this.onDeleteNote.bind(this)
    this.onAddNote = this.onAddNote.bind(this)
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes() {
    noteService.query().then((notes) => {
      this.setState({ notes })
    })
  }

  onAddNote(note) {
    noteService.addNote(note)
    this.loadNotes()
  }

  onDeleteNote(noteId) {
    noteService.removeNote(noteId)
    this.loadNotes()
  }

  render() {
    console.log(this.state.notes)
    return (
      <section className='note-app'>
        <AddNote onAddNote={this.onAddNote} />
        {this.state.notes ? (
          <NoteList notes={this.state.notes} onNoteDelete={this.onDeleteNote} />
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    )
  }
}
