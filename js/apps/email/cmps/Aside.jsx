import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'
import { ProgressBar } from './EmailStatus.jsx'
import { Modal } from '../../../../cmps/Modal.jsx'

export class Aside extends React.Component {

  state = {
    isSendingEmail: false
  }

  componentWillMount() {
    eventBus.on('emailSent', () => {
      this.setState({ isSendingEmail: false })
    })
  }

  openCompose = () => {
    this.setState({ isSendingEmail: true })
  }

  filterEmails = (filterBy) => {
    this.props.filterEmails(filterBy)
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  render() {

    const { isSendingEmail } = this.state

    return (
      <div className="aside">
        {isSendingEmail && <Modal />}
        <div className="compose flex" onClick={this.openCompose}><img className="plus" src="./js/apps/email/assets/img/plus.png" /><span className="compose-text">Compose</span></div>
        <div className="nav inbox" onClick={() => this.filterEmails('')}><i className="fas fa-inbox"></i>Inbox</div>
        <div className="nav read" onClick={() => this.filterEmails('read')}><i className="far fa-envelope-open"></i>Read</div>
        <div className="nav not-read" onClick={() => this.filterEmails('notRead')}><i className="far fa-envelope"></i>Not read</div>
        <div className="nav sent" onClick={() => this.filterEmails('sent')}><i className="far fa-paper-plane"></i>Sent</div>
        <div className="nav deleted"><i className="far fa-trash-alt"></i>Deleted</div>
        <ProgressBar width={150} percent={emailService.emailStatus()} />
      </div>
    )
  }
}