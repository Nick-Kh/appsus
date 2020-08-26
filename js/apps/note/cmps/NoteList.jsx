import { NotePreview } from './NotePreview.jsx'

export const NoteList = ({ notes }) => {
  return (
    <section className='note-list'>
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} />
      ))}
    </section>
  )
}
