export const TextForm = ({ onTextChange, onTitleChange }) => {
  return (
    <div className='text-form'>
      <input
        type='text'
        placeholder='Add title...'
        onChange={(ev) => onTitleChange(ev.target.value)}
      />
      <input
        type='text'
        placeholder='Add note...'
        onChange={(ev) => onTextChange(ev.target.value)}
        required
      />
    </div>
  )
}
