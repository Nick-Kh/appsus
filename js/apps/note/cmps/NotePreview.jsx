import { NoteImg } from './NoteTypes/NoteImg.jsx'
import { NoteText } from './NoteTypes/NoteText.jsx'
import { NoteVid } from './NoteTypes/NoteVid.jsx'
import { NoteTodos } from './NoteTypes/NoteTodos.jsx'

export const NotePreview = ({ note }) => {
  switch (note.type) {
    case 'NoteImg':
      return <NoteImg note={note} />
    case 'NoteTodos':
      return <NoteTodos note={note} />
    case 'NoteVid':
      return <NoteVid note={note} />
    case 'NoteText':
    default:
      return <NoteText note={note} />
  }
}
