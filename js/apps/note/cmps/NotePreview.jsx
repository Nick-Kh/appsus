import { NoteImg } from './NoteTypes/NoteImg.jsx'
import { NoteText } from './NoteTypes/NoteText.jsx'
import { NoteVid } from './NoteTypes/NoteVid.jsx'
import { NoteTodos } from './NoteTypes/NoteTodos.jsx'

export const NotePreview = ({
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
  switch (note.type) {
    case 'NoteImg':
      return (
        <NoteImg
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteHover={onNoteHover}
          onHover={onHover}
          onNoteUnhover={onNoteUnhover}
          onNotePin={onNotePin}
          onEditNote={onEditNote}
          editNote={editNote}
          onAddNote={onAddNote}
          onColorPick={onColorPick}
        />
      )
    case 'NoteTodos':
      return (
        <NoteTodos
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteHover={onNoteHover}
          onNoteUnhover={onNoteUnhover}
          onHover={onHover}
          onNotePin={onNotePin}
          onEditNote={onEditNote}
          editNote={editNote}
          onAddNote={onAddNote}
          onColorPick={onColorPick}
        />
      )
    case 'NoteVid':
      return (
        <NoteVid
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteHover={onNoteHover}
          onNoteUnhover={onNoteUnhover}
          onHover={onHover}
          onNotePin={onNotePin}
          onEditNote={onEditNote}
          editNote={editNote}
          onAddNote={onAddNote}
          onColorPick={onColorPick}
        />
      )
    case 'NoteText':
    default:
      return (
        <NoteText
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteHover={onNoteHover}
          onNoteUnhover={onNoteUnhover}
          onHover={onHover}
          onNotePin={onNotePin}
          onEditNote={onEditNote}
          editNote={editNote}
          onAddNote={onAddNote}
          onColorPick={onColorPick}
        />
      )
  }
}
