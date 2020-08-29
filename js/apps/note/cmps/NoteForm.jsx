export const NoteForm = ({
  note,
  onTitleChange,
  onUrlChange,
  onTextChange,
}) => {
  switch (note.type) {
    case 'NoteText':
      return (
        <React.Fragment>
          <label>Title</label>
          <input
            type='text'
            placeholder='Edit title...'
            onChange={(ev) => onTitleChange(ev.target.value)}
            value={note.info.title ? note.info.title : ''}
          />
          <label>Text</label>
          <input
            type='text'
            placeholder='Edit note...'
            onChange={(ev) => onTextChange(ev.target.value)}
            value={note.info.txt ? note.info.txt : ''}
            required
          />
        </React.Fragment>
      )
    case 'NoteImg':
      return (
        <React.Fragment>
          <label>Url</label>
          <input
            type='text'
            placeholder='Edit image url...'
            onChange={(ev) => onUrlChange(ev.target.value)}
            value={note.info.url}
          />
          <label>Title</label>
          <input
            type='text'
            placeholder='Edit title...'
            onChange={(ev) => onTitleChange(ev.target.value)}
            value={note.info.title ? note.info.title : ''}
          />
        </React.Fragment>
      )
  }
}
