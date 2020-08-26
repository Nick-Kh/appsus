import { emailService } from '../mail/services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx';

export class EmailApp extends React.Component {

  state = {
    emails: []
  }

  componentDidMount() {
    this.loadEmails()
  }

  componentWillUnmount() {
    this.setState({ emails: [] })
  }

  loadEmails() {
    emailService.query()
      .then(emails => {
        this.setState({ emails })
      })
  }

  render() {

    const { emails } = this.state

    return (
      <section className="email-app">
        <h1>Mail app</h1>
        <EmailList emails={emails} />
      </section>
    )
  }
}