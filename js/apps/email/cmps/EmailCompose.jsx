import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'
import { ComposeValidation } from '../cmps/ComposeValidation.jsx'

export class EmailCompose extends React.Component {

  state = {
    email: null,
    isValid: false
  }

  elInput = React.createRef()

  componentDidMount() {
    this.setState({ email: emailService.getEmptyEmail() })
    this.elInput.current.focus()
  }

  onInputChange = (ev) => {
    const value = ev.target.value
    this.setState({ email: { ...this.state.email, [ev.target.name]: value } }, () => {
      if (this.state.email.from !== '' && this.state.email.email !== '' && emailService.validateEmail(this.state.email.email) && this.state.email.subject !== '') this.setState({ isValid: true })
      else if (this.state.email.from === '' || this.state.email.email === '' || !emailService.validateEmail(this.state.email.email) || this.state.email.subject === '') this.setState({ isValid: false })
    })
  }

  saveEmail = () => {
    if (this.state.email.from === '') return
    else if (this.state.email.email === '' || !emailService.validateEmail(this.state.email.email)) return
    else if (this.state.email.subject === '') return
    emailService.saveEmail(this.state.email)
    eventBus.emit('emailSent')
    eventBus.emit('loadEmails')
  }

  render() {

    return (
      <section className="email-compose">
        <div className="compose-header">
          <p>New Message</p>
        </div>
        <div className="compose-body">
          <input ref={this.elInput} type="text" id="compose-from" name="from" placeholder="Name" onChange={this.onInputChange} />
          <input type="text" id="compose-from" name="email" placeholder="Email" onChange={this.onInputChange} />
          <input type="text" id="compose-subject" name="subject" placeholder="Subject" onChange={this.onInputChange} />
          <textarea id="compose-text" name="body" onChange={this.onInputChange} />
          <ComposeValidation isValid={this.state.isValid} />
          <button className="email-send-btn" onClick={this.saveEmail}>Send</button>
        </div>
      </section>
    )
  }
}