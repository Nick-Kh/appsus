import { ColorPicker } from './ColorPicker.jsx'

export const EditPanel = ({
  noteId,
  onNoteDelete,
  onNotePin,
  isPinned,
  onEditNote,
}) => {
  return (
    <div className={`edit-panel ${isPinned ? 'pinned' : ''}`}>
      <i className={`fas fa-thumbtack`} onClick={() => onNotePin(noteId)}></i>
      <div className='edit-actions'>
        <i className='fas fa-paint-brush'></i>
        <i className='fas fa-edit' onClick={() => onEditNote(noteId)}></i>
        <i
          className='fas fa-trash-alt'
          onClick={() => onNoteDelete(noteId)}></i>
      </div>
    </div>
  )
}
