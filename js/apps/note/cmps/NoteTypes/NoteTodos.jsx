import { EditPanel } from '../EditPanel.jsx'

export const NoteTodos = ({ note, onNoteDelete }) => {
  return (
    <div className='note-preview' style={note.style}>
      <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />
      <h1>Todos note</h1>
    </div>
  )
}
