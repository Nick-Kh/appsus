export const EditPanel = ({ noteId, onNoteDelete }) => {
  return (
    <div className='edit-panel'>
      <i className='fas fa-thumbtack'></i>
      <div className='edit-actions'>
        <i className='fas fa-edit'></i>
        <i
          className='fas fa-trash-alt'
          onClick={() => onNoteDelete(noteId)}></i>
      </div>
    </div>
  )
}
