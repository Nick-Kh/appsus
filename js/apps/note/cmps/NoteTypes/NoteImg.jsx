export const NoteImg = ({ note }) => {
  return (
    <div className='note-preview note-img' style={note.style}>
      <h1>Image note</h1>
      <img src='http://coding-academy.org/books-photos/20.jpg' alt='' />
    </div>
  )
}
