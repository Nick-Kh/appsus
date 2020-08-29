import { emailService } from './services/email-service.js'
import { eventBus } from '../../../services/event-bus-service.js'

export class EmailDetails extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    this.getEmail();
  }

  getEmail = () => {
    const emailId = this.props.match.params.emailId
    const email = emailService.getEmail(emailId)
    this.setState({ email })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  unReadEmail = () => {
    emailService.unReadEmail(this.props.match.params.emailId)
    eventBus.emit('loadEmails')
    this.goBack()
  }

  removeEmail = () => {
    emailService.removeEmail(this.props.match.params.emailId)
    eventBus.emit('loadEmails')
    this.goBack()
  }

  render() {

    const { email } = this.state;
    if (!email) return <div>Loading...</div>

    return (
      <section className="email-details">
        <i className="details-nav fas fa-arrow-left" onClick={this.goBack}></i>
        <i className="details-nav far fa-envelope" onClick={this.unReadEmail}></i>
        <i className="details-nav far fa-trash-alt" onClick={this.removeEmail}></i>
        <h2 className="details-el subject">{email.subject}</h2>
        <h1 className="details-el from">{email.from}</h1>
        <p className="details-el email-adress">({email.email})</p>
        <p className="details-el received">{email.receivedAt}</p>
        <div className="details-el body">{email.body}</div>
        <button className="reply-btn">Reply</button>
      </section>
    )
  }
}