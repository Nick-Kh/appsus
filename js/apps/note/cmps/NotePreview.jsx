import { NoteImg } from './NoteTypes/NoteImg.jsx'
import { NoteText } from './NoteTypes/NoteText.jsx'
import { NoteVid } from './NoteTypes/NoteVid.jsx'
import { NoteTodos } from './NoteTypes/NoteTodos.jsx'

export const NotePreview = ({ note, onNoteDelete }) => {
  switch (note.type) {
    case 'NoteImg':
      return <NoteImg note={note} onNoteDelete={onNoteDelete} />
    case 'NoteTodos':
      return <NoteTodos note={note} onNoteDelete={onNoteDelete} />
    case 'NoteVid':
      return <NoteVid note={note} onNoteDelete={onNoteDelete} />
    case 'NoteText':
    default:
      return <NoteText note={note} onNoteDelete={onNoteDelete} />
  }
}
