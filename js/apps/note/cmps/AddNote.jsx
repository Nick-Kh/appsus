export const AddNote = (props) => {
  return (
    <section className='add-note'>
      <input
        type='text'
        placeholder="What's on your mind..."
        onChange={props.onNoteInput}
      />
    </section>
  )
}
