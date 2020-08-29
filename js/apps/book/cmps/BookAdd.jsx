import { bookService } from '../services/book-service.js'
import { eventBus } from '../services/event-bus-service.js'

export class BookAdd extends React.Component {

  state = {
    input: '',
    searchResults: []
  }

  onInputChange = ({ target }) => {
    if (!target.value) return;
    this.setState({ input: target.value }, () => {
      bookService.getBooks(this.state.input)
        .then(data => {
          this.setState({ searchResults: data.items })
        })
    })
  }

  addBook = (book) => {
    this.setState({ name: '', searchResults: [] })
    bookService.addBook(book)
    eventBus.emit('closeModal')
    eventBus.emit('loadBooks')
  }

  render() {

    const { searchResults } = this.state

    return (
      <section className="book-add">
        <input type="text" placeholder="Search for a book" onChange={this.onInputChange} />
        <ul>
          {searchResults.map((book =>
            <li key={book.id}>
              {book.volumeInfo.title}
              <button className="add-btn" onClick={() => this.addBook(book)}>+</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}