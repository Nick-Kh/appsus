import { ColorPicker } from './ColorPicker.jsx'

export class EditPanel extends React.Component {
  state = {
    isColor: false,
  }

  toggleColorPicker = () => {
    this.setState({ isColor: !this.state.isColor })
  }

  render() {
    const {
      noteId,
      onNoteDelete,
      onNotePin,
      isPinned,
      onEditNote,
      onColorPick,
    } = this.props
    return (
      <div className={`edit-panel ${isPinned ? 'pinned' : ''}`}>
        <i className={`fas fa-thumbtack`} onClick={() => onNotePin(noteId)}></i>
        <div className='edit-actions'>
          {this.state.isColor && (
            <ColorPicker
              onColorPick={onColorPick}
              toggleColorPicker={this.toggleColorPicker}
              noteId={noteId}
            />
          )}
          <i
            className='fas fa-paint-brush'
            onClick={this.toggleColorPicker}></i>
          <i className='fas fa-edit' onClick={() => onEditNote(noteId)}></i>
          <i
            className='fas fa-trash-alt'
            onClick={() => onNoteDelete(noteId)}></i>
        </div>
      </div>
    )
  }
}
