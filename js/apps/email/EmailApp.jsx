import { emailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx';

export class EmailApp extends React.Component {

  state = {
    emails: []
  }

  componentDidMount() {
    this.loadEmails()
  }

  componentWillUnmount() {
    this.removeStateEmails()
  }

  loadEmails() {
    emailService.query()
      .then(emails => {
        this.setState({ emails })
      })
  }

  removeStateEmails() {
    this.setState({ emails: [] })
  }

  removeEmail = (ev, idx) => {
    emailService.removeEmail(idx)
    this.removeStateEmails()
    this.loadEmails()
  }

  render() {

    const { emails } = this.state

    return (
      <section className="email-app">
        <h1>Mail app</h1>
        <EmailList emails={emails} removeEmail={this.removeEmail}/>
      </section>
    )
  }
}