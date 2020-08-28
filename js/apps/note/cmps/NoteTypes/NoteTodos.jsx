import { EditPanel } from '../EditPanel.jsx'

export const NoteTodos = ({
  note,
  onNoteDelete,
  onNoteHover,
  onHover,
  onNoteUnhover,
  onNotePin,
  onEditNote,
}) => {
  return (
    <div
      className='note-preview'
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
      <h1>Todos note</h1>
    </div>
  )
}
