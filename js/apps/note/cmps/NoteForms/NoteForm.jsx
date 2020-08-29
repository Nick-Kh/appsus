export const NoteForm = ({
  note,
  onTitleChange,
  onUrlChange,
  onTextChange,
  onTodoChange,
  todos,
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
    case 'NoteTodos':
      return (
        <React.Fragment>
          <label>Title</label>
          <input
            type='text'
            placeholder='Edit title'
            onChange={(ev) => onTitleChange(ev.target.value)}
            value={note.info.title ? note.info.title : ''}
          />
          {note.info.todos.map((todo, idx) => (
            <React.Fragment key={todo.txt}>
              <label>Todo#{idx + 1}</label>
              <input
                type='text'
                placeholder='Edit todo...'
                onChange={(ev) => onTodoChange(ev.target.value, idx)}
                value={todos[idx]}
              />
            </React.Fragment>
          ))}
        </React.Fragment>
      )
    case 'NoteVid':
      return (
        <React.Fragment>
          <label>Title</label>
          <input
            type='text'
            placeholder='Edit title...'
            onChange={(ev) => onTitleChange(ev.target.value)}
            value={note.info.title ? note.info.title : ''}
          />
          <label>Url</label>
          <input
            type='text'
            placeholder='Edit video url...'
            onChange={(ev) => onUrlChange(ev.target.value)}
            value={note.info.url}
          />
        </React.Fragment>
      )
  }
}
