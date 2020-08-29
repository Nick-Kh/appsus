import { bookService } from '../services/book-service.js'

export class ReviewAdd extends React.Component {

  state = {
    review
  }

  render() {
    return (
      <form onSubmit={bookService.addReview()}>
        <input name="name" value={'name'}
          placeholder="Full name" type="text"
          onChange={this.onInputChange}
        />
        {/* <div className="rate">★★★★★</div> */}
        <label for="rate">Rate:</label>
        <select name="rate" id="rate">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="read-at">Read at</label>
        <input type="date" id="date" name="read-at" />
        <textarea name="message" rows="10" cols="30"></textarea>
        <button onClick={bookService.addReview()}>Add Review</button>
      </form>
    );
  }
}


// onInputChange = (ev) => {
//   console.log('Input:', ev.target.name);
//   console.log('Changed', ev.target.value);
//   const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
//   this.setState({ pet: { ...this.state.pet, [ev.target.name]: value } })
// }