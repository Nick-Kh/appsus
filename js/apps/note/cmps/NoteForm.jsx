import { TextForm } from './NoteForms/TextForm.jsx'
import { ImgForm } from './NoteForms/ImgForm.jsx'
import { TodoForm } from './NoteForms/TodoForm.jsx'
import { VidForm } from './NoteForms/VidForm.jsx'

export const NoteForm = ({ note }) => {
  switch (note.type) {
    case 'NoteText':
      return <TextForm note={note} />
    case 'NoteImg':
      return <ImgForm note={note} />
    case 'NoteTodos':
      return <TodoForm note={note} />
    case 'NoteVid':
      return <VidForm note={note} />
  }
}
