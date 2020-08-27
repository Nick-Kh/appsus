import { EditPanel } from '../EditPanel.jsx'

export const NoteVid = ({ note, onNoteDelete }) => {
  return (
    <div className='note-preview'>
      <EditPanel noteId={note.id} onNoteDelete={onNoteDelete} />
      <h1>Video Note</h1>
    </div>
  )
}
