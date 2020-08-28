import { AddNote } from './cmps/AddNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { Modal } from '../../../cmps/Modal.jsx'
import { eventBus } from '../../../services/event-bus-service.js'

export class Note extends React.Component {
  state = {
    notes: null,
    onHover: {
      isOnHover: false,
      noteId: null,
    },
    isEditing: false,
    editNote: null,
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

  onNotePin = (noteId) => {
    noteService.notePin(noteId)
    this.loadNotes()
  }

  onNoteHover = (noteId) => {
    let onHover = { ...this.state.onHover }
    onHover.isOnHover = true
    onHover.noteId = noteId
    this.setState({ onHover })
  }

  onNoteUnhover = () => {
    let onHover = { ...this.state.onHover }
    onHover.isOnHover = false
    onHover.noteId = null
    this.setState({ onHover })
  }

  onEditNote = (noteId) => {
    noteService.editNote(noteId)
    eventBus.emit('openModal')
    this.setState({ editNote: noteService.getNoteById(noteId) })
    this.setState({ isEditing: true })
  }

  getPinnedNotes = () => {
    if (this.state.notes) {
      let notes = this.state.notes
      notes = notes.filter((note) => note.isPinned)
      return notes
    }
  }

  getOtherNotes = () => {
    if (this.state.notes) {
      let notes = this.state.notes
      notes = notes.filter((note) => !note.isPinned)
      return notes
    }
  }

  render() {
    const pinnedNotes = this.getPinnedNotes()
    const otherNotes = this.getOtherNotes()

    return (
      <section className='note-app'>
        <AddNote onAddNote={this.onAddNote} />
        {pinnedNotes && (
          <React.Fragment>
            <h1 className='note-category'>pinned</h1>
            <NoteList
              notes={pinnedNotes}
              onNoteDelete={this.onDeleteNote}
              onNoteHover={this.onNoteHover}
              onNoteUnhover={this.onNoteUnhover}
              onHover={this.state.onHover}
              onNotePin={this.onNotePin}
              onEditNote={this.onEditNote}
            />
          </React.Fragment>
        )}
        {otherNotes && (
          <React.Fragment>
            <h1 className='note-category'>other</h1>
            <NoteList
              notes={otherNotes}
              onNoteDelete={this.onDeleteNote}
              onNoteHover={this.onNoteHover}
              onNoteUnhover={this.onNoteUnhover}
              onHover={this.state.onHover}
              onNotePin={this.onNotePin}
              onEditNote={this.onEditNote}
            />
          </React.Fragment>
        )}
      </section>
    )
  }
}
