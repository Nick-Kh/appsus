import { bookService } from '../services/book-service.js'
import { eventBus } from '../services/event-bus-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {

  state = {
    books: [],
    selectedBook: null,
    filterBy: ''
  }

  componentDidMount() {
    this.loadBooks();
    eventBus.on('loadBooks', () => {
      this.loadBooks()
    })
  }

  loadBooks() {
    bookService.query()
      .then(books => {
        this.setState({ books });
      });
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy });
  }

  getBooksForDisplay() {
    const books = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.filterBy.toLowerCase()));
    return books;
  }

  render() {

    const books = this.getBooksForDisplay();

    return (
      <section className="book-app">
        <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
        <button className="add-book-btn" onClick={() => eventBus.emit('openModal')}>Add book</button>
        <BookList books={books} />
      </section>
    )
  }
}