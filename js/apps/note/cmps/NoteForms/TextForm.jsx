export const TextForm = ({ onTextChange }) => {
  return (
    <input
      type='text'
      placeholder="What's on your mind..."
      onChange={(ev) => onTextChange(ev.target.value)}
    />
  )
}
