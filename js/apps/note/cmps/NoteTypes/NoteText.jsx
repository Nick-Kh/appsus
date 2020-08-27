import { EditPanel } from '../EditPanel.jsx'

export const NoteText = ({ note, onNoteDelete }) => {
  return (
    <div className='note-preview' style={note.style}>
      <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />
      <h2>{note.info.title && note.info.title}</h2>
      <h1>{note.info.txt && note.info.txt}</h1>
    </div>
  )
}
