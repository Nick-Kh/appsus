import { emailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx';
import { Aside } from './cmps/Aside.jsx';

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

  readToggle = (idx) => {
    emailService.readToggle(idx)
    this.loadEmails()
  }

  removeEmail = (idx) => {
    emailService.removeEmail(idx)
    this.loadEmails()
  }

  render() {

    const { emails } = this.state

    return (
      <section className="email-app">
        <div className="container flex">
          <Aside />
          <EmailList emails={emails} removeEmail={this.removeEmail} readToggle={this.readToggle} />
        </div>
      </section>
    )
  }
}