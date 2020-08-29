const { Link } = ReactRouterDOM;

import { emailService } from '../services/email-service.js'
import { LongTxt } from '../cmps/LongText.jsx'
import { eventBus } from '../../../../services/event-bus-service.js'

export function EmailPreview({ email, removeEmail, readToggle }) {

  function remove(ev, emailId) {
    ev.preventDefault()
    ev.stopPropagation()
    removeEmail(emailId)
  }

  function toggle(ev, emailId) {
    ev.preventDefault()
    ev.stopPropagation()
    readToggle(emailId)
  }

  function read(emailId) {
    emailService.readEmail(emailId)
    eventBus.emit('loadEmails')
  }

  return (
    <Link to={`/email/${email.id}`}>
      <div className={`email-preview ${email.isRead ? "unread" : "read"}`} onClick={() => read(email.id)}>
        <div className={`em-cont email-from ${email.isRead ? "bold" : ""}`}>{email.from}</div>
        <div className={`em-cont email-subject ${email.isRead ? "bold" : ""}`}>{email.subject}</div>
        <LongTxt text={email.body} />
        <i className={`envelope ${email.isRead ? "far fa-envelope" : "far fa-envelope-open"}`} onClick={(ev) => toggle(ev, email.id)}></i>
        <i className="trash far fa-trash-alt" onClick={(ev) => remove(ev, email.id)}></i>
      </div>
    </Link>
  )
}