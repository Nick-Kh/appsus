export const TextForm = ({
  onTextChange,
  onTitleChange,
  currTitle,
  currText,
}) => {
  return (
    <div className='text-form'>
      <input
        type='text'
        placeholder='Add title...'
        onChange={(ev) => onTitleChange(ev.target.value)}
        value={currTitle}
      />
      <input
        type='text'
        placeholder='Add note...'
        onChange={(ev) => onTextChange(ev.target.value)}
        value={currText}
        required
      />
    </div>
  )
}
