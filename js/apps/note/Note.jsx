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
    editNote: {
      isEditing: false,
      id: null,
    },
    currNote: null,
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    noteService.query().then((notes) => {
      this.setState({ notes })
    })
  }

  onAddNote = (note, isEdited = false) => {
    if (note) {
      if (isEdited && note.id) noteService.updateNote(note.id, note)
      else if (!note.id && !isEdited) noteService.addNote(note)
    }
    let editNote = { ...this.state.editNote }
    editNote.isEditing = null
    editNote.id = null
    this.setState({ editNote })
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
    const editNote = { ...this.state.editNote }
    editNote.isEditing = true
    editNote.id = noteId
    this.setState({ editNote })
  }

  onColorPick = (noteId, color) => {
    noteService.changeColor(noteId, color)
    this.loadNotes()
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
              editNote={this.state.editNote}
              onAddNote={this.onAddNote}
              onColorPick={this.onColorPick}
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
              editNote={this.state.editNote}
              onAddNote={this.onAddNote}
              onColorPick={this.onColorPick}
            />
          </React.Fragment>
        )}
      </section>
    )
  }
}
