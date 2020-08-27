import { AddNote } from './cmps/AddNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'

export class Note extends React.Component {
  state = {
    notes: null,
    onHover: {
      isOnHover: false,
      noteId: null,
    },
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    noteService.query().then((notes) => {
      this.setState({ notes })
    })
  }

  onAddNote = (note) => {
    noteService.addNote(note)
    this.loadNotes()
  }

  onDeleteNote = (noteId) => {
    noteService.removeNote(noteId)
    this.loadNotes()
  }

  onNoteHover = (noteId) => {
    console.log('im here')
    let onHover = { ...this.state.onHover }
    if (this.state.onHover.isOnHover) {
      console.log('on unhover')
      onHover.isOnHover = false
      onHover.noteId = null
      this.setState({ onHover })
    } else {
      console.log('on hover')
      onHover.isOnHover = true
      onHover.noteId = noteId
      this.setState({ onHover })
    }
  }

  render() {
    return (
      <section className='note-app'>
        <AddNote onAddNote={this.onAddNote} />
        {this.state.notes ? (
          <NoteList
            notes={this.state.notes}
            onNoteDelete={this.onDeleteNote}
            onNoteHover={this.onNoteHover}
            isOnHover={this.state.onHover.isOnHover}
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    )
  }
}
