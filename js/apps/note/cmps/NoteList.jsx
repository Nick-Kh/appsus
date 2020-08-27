import { NotePreview } from './NotePreview.jsx'

export const NoteList = ({ notes, onNoteDelete, onNoteHover, isOnHover }) => {
  return (
    <section className='note-list'>
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteHover={onNoteHover}
          isOnHover={isOnHover}
        />
      ))}
    </section>
  )
}
