
export class EmailCompose extends React.Component {

  state = {

  }

  render() {

    return (
      <section className="email-compose">
        <div className="compose-header">
          <p>New Message</p>
        </div>
        <div className="compose-body">
          <input type="text" id="compose-to" name="compose-to" placeholder="To" />
          <input type="text" id="compose-subject" name="compose-subject" placeholder="Subject" />
          <textarea id="compose-text" name="compose-text">
          </textarea>
          <button className="email-send-btn">Send</button>
        </div>
      </section>
    )
  }
}