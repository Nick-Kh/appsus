import { EditPanel } from '../EditPanel.jsx'

export const NoteImg = ({
  note,
  onNoteDelete,
  onNoteHover,
  onNoteUnhover,
  onHover,
  onNotePin,
  onEditNote,
}) => {
  return (
    <div
      className='note-preview note-img'
      style={note.style}
      onMouseEnter={() => onNoteHover(note.id)}
      onMouseLeave={onNoteUnhover}>
      {onHover.isOnHover && onHover.noteId === note.id && (
        <EditPanel
          noteId={note.id}
          isPinned={note.isPinned}
          onNoteDelete={onNoteDelete}
          onNotePin={onNotePin}
          onEditNote={onEditNote}
        />
      )}

      <img src={note.info.url} alt='your image' />
      <h1>{note.info.title}</h1>
    </div>
  )
}
