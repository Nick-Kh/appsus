import { bookService } from '../services/book-service.js'
import { LongTxt } from '../cmps/LongText.jsx'

const { Link } = ReactRouterDOM;

export class BookDetails extends React.Component {

  state = {
    book: null,
    isLongTxtShown: false
  }

  componentDidMount() {
    const { bookId } = this.props.match.params
    bookService.getById(bookId)
      .then(book => this.setState({ book }))
  }

  setTextShow = () => {
    let isLongTxtShown = !this.state.isLongTxtShown;
    this.setState({ isLongTxtShown });
  }

  render() {

    const { book } = this.state;
    if (!book) return <div>Loading...</div>

    const isOnSale = book.listPrice.isOnSale;
    const isHighPrice = bookService.checkPrice(book.listPrice.amount);


    return (
      <section className="book-details">
        <h2>{book.title}</h2>
        <h1>{book.subtitle}</h1>
        <img src={book.thumbnail} />
        <p>Written by {book.authors}</p>
        <LongTxt text={book.description} isLongTxtShown={this.state.isLongTxtShown} />
        <button className={`see-btn ${this.state.isLongTxtShown ? 'none' : ''}`} onClick={this.setTextShow}>See more</button>
        <button className={`see-btn ${this.state.isLongTxtShown ? '' : 'none'}`} onClick={this.setTextShow}>See less</button>
        <p>This book is {bookService.oldOrNew(book.publishedDate)}</p>
        <p>Reading time - {bookService.pagesCount(book.pageCount)}</p>
        <p>Categories: {book.categories.join(', ')}</p>
        <p className={"lang"}>Language - {book.language}</p>
        <p className={`${isHighPrice}`}>{`Price ${bookService.currencyFormat(book.listPrice.currencyCode)}${book.listPrice.amount}`}</p>
        <img src="./assets/img/sale.png" className={`sale-img
          ${isOnSale ? '' : 'none'}`} />
        <Link to="/books">
          <button className={"back-btn"}>Back to list</button>
        </Link>
      </section>
    )
  }
}