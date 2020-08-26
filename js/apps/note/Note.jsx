import { AddNote } from './cmps/AddNote.jsx'
import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'

export class Note extends React.Component {
  state = {
    notes: null,
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes() {
    noteService.query().then((notes) => {
      this.setState({ notes })
    })
  }

  render() {
    console.log(this.state.notes)
    return (
      <section className='note-app'>
        <h1>Note app</h1>
        <AddNote />
        {this.state.notes ? (
          <NoteList notes={this.state.notes} />
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    )
  }
}
