import { emailService } from './services/email-service.js'

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

  render() {

    const { email } = this.state;
    if (!email) return <div>Loading...</div>

    return (
      <section className="email-details">
        <i className="fas fa-arrow-left"></i>
        {/* <div className="email-details-container"> */}
          <h2>Subject: {email.subject}</h2>
          <h1>From: {email.from}</h1>
          <p>Received at: {email.receivedAt}</p>
          <p>{email.body}</p>
        {/* </div> */}
      </section>
    )
  }
}