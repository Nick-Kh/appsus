import { EditPanel } from '../EditPanel.jsx'
import { EditForm } from '../NoteForms/EditForm.jsx'

export const NoteVid = ({
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
          <h2>{note.info.title ? note.info.title : ''}</h2>
          <iframe
            className='vid-frame'
            placeholder='your vid'
            src={note.info.url}></iframe>
        </React.Fragment>
      )}
    </div>
  )
}
