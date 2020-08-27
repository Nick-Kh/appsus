import { EditPanel } from '../EditPanel.jsx'

export const NoteText = ({ note, onNoteDelete }) => {
  return (
    <div className='note-preview' style={note.style}>
      <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />
      <h1>{note.info.txt}</h1>
    </div>
  )
}
