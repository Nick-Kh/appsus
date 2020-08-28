import { EditPanel } from '../EditPanel.jsx'

export const NoteText = ({
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
          isPinned={note.isPinned}
        />
      )}
      <h2>{note.info.title && note.info.title}</h2>
      <h1>{note.info.txt && note.info.txt}</h1>
    </div>
  )
}
