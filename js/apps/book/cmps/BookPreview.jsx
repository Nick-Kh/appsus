import { bookService } from '../services/book-service.js'

const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {
  return (
    <Link to={`/books/${book.id}`}>
      <article className="book-preview">
        <h3>{book.title}</h3>
        <img src={book.thumbnail} />
        <p>{`Price ${bookService.currencyFormat(book.listPrice.currencyCode)}${book.listPrice.amount}`}</p>
      </article>
    </Link>
  )
}