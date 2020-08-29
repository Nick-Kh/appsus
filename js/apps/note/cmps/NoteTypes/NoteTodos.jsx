import { EditPanel } from '../EditPanel.jsx'
import { EditForm } from '../NoteForms/EditForm.jsx'

export const NoteTodos = ({
  note,
  onNoteDelete,
  onNoteHover,
  onNoteUnhover,
  onHover,
  onNotePin,
  onEditNote,
  editNote,
  onAddNote,
  onColorPick,
}) => {
  return (
    <div
      className='note-preview'
      style={{ backgroundColor: note.style.backgroundColor }}
      onMouseEnter={() => onNoteHover(note.id)}
      onMouseLeave={onNoteUnhover}>
      {editNote.isEditing && editNote.id === note.id ? (
        <EditForm note={note} onAddNote={onAddNote} />
      ) : (
        <React.Fragment>
          {onHover.isOnHover && onHover.noteId === note.id && (
            <EditPanel
              noteId={note.id}
              isPinned={note.isPinned}
              onNoteDelete={onNoteDelete}
              onNotePin={onNotePin}
              onEditNote={onEditNote}
              onColorPick={onColorPick}
            />
          )}

          <h1>Todos Note</h1>
        </React.Fragment>
      )}
    </div>
  )
}
