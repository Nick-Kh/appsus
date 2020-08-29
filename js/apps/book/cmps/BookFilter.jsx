export function BookFilter(props) {
  return <section className="book-filter">
    <input type="text" placeholder="Filter books by name" onChange={(ev) => {
      props.onSetFilter(ev.target.value)
    }} />
  </section>
}