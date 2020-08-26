export const AddNote = (props) => {
  return (
    <section className='add-note'>
      <div className='input-container'>
        <input
          type='text'
          placeholder="What's on your mind..."
          onChange={props.onNoteInput}
        />
      </div>
    </section>
  )
}
