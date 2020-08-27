import { EditPanel } from '../EditPanel.jsx'

export const NoteImg = ({ note, onNoteDelete, onNoteHover, isOnHover }) => {
  return (
    <div
      className='note-preview note-img'
      style={note.style}
      onMouseEnter={() => onNoteHover(note.id)}
      onMouseLeave={() => onNoteHover(note.id)}>
      {console.log(isOnHover)}
      {isOnHover && <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />}

      <img src={note.info.url} alt='your image' />
      <h1>{note.info.title}</h1>
    </div>
  )
}
