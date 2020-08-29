import { EditPanel } from '../EditPanel.jsx'
import { EditForm } from '../NoteForms/EditForm.jsx'

export const NoteImg = ({
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
      className='note-preview note-img'
      style={{
        backgroundColor: note.style.backgroundColor
          ? note.style.backgroundColor
          : 'lightblue',
      }}
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
          <img src={note.info.url} alt='your image' />
          <br />
          <h1>{note.info.title}</h1>
        </React.Fragment>
      )}
    </div>
  )
}
