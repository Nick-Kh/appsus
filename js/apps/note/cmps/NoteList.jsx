import { NotePreview } from './NotePreview.jsx'

export const NoteList = ({
  notes,
  onNoteDelete,
  onNoteHover,
  onNoteUnhover,
  onHover,
  onNotePin,
  onEditNote,
}) => {
  return (
    <section className='note-list'>
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteHover={onNoteHover}
          onNoteUnhover={onNoteUnhover}
          onHover={onHover}
          onNotePin={onNotePin}
          onEditNote={onEditNote}
        />
      ))}
    </section>
  )
}
