export const ColorPicker = ({ noteId, onColorPick, toggleColorPicker }) => {
  return (
    <div className='color-picker'>
      <div
        className='color-item default'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'lightblue')
        }}></div>
      <div
        className='color-item blue'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'blue')
        }}></div>
      <div
        className='color-item red'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'red')
        }}></div>
      <div
        className='color-item green'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'green')
        }}></div>
      <div
        className='color-item lightcoral'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'lightcoral')
        }}></div>
      <div
        className='color-item yellow'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'yellow')
        }}></div>
      <div
        className='color-item orange'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'orange')
        }}></div>
      <div
        className='color-item purple'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'purple')
        }}></div>
      <div
        className='color-item brown'
        onClick={() => {
          toggleColorPicker()
          onColorPick(noteId, 'brown')
        }}></div>
    </div>
  )
}
