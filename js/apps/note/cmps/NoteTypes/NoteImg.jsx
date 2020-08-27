import { EditPanel } from '../EditPanel.jsx'

export const NoteImg = ({ note, onNoteDelete }) => {
  return (
    <div className='note-preview note-img' style={note.style}>
      <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />
      <img src={note.info.url} alt='your image' />
      <h1>{note.info.title}</h1>
    </div>
  )
}
