import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'
import { ProgressBar } from './EmailStatus.jsx'

export function Aside() {

  return (
    <div className="aside">
      <div className="compose flex" onClick={() => eventBus.emit('openModal')}><img className="plus" src="./js/apps/email/assets/img/plus.png" />Compose</div>
      <div className="nav inbox"><i className="fas fa-inbox"></i>Inbox</div>
      <div className="nav sent"><i className="far fa-paper-plane"></i>Sent</div>
      <div className="nav deleted"><i className="far fa-trash-alt"></i>Deleted</div>
      <ProgressBar width={150} percent={emailService.emailStatus()} />
    </div>
  )
}