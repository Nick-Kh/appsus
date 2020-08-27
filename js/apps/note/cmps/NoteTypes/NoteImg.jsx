import { EditPanel } from '../EditPanel.jsx'

export const NoteImg = ({ note, onNoteDelete }) => {
  return (
    <div className='note-preview note-img' style={note.style}>
      <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />
      <h1>Image note</h1>
      <img src='http://coding-academy.org/books-photos/20.jpg' alt='' />
    </div>
  )
}
