import { BookPreview } from './BookPreview.jsx';

export function BookList({ books }) {
  return (
    <section className="book-list">
      {books.map(book =>
        <div className="book" key={book.id}>
          <BookPreview book={book} />
        </div>)
      }
    </section>
  )
}