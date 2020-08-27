const { Link } = ReactRouterDOM;

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

  return (
    <Link to={`/mail/${email.id}`}>
      <div className={`email-preview ${email.isRead ? "unread" : "read"}`}>
        <input className="em-cont checkbox" type="checkbox" />
        <p className="em-cont email-from">{email.from}</p>
        <p className="em-cont email-subject">{email.subject}</p>
        <p className="em-cont email-body">{email.body}</p>
        <i className={`envelope ${email.isRead ? "far fa-envelope" : "far fa-envelope-open"}`} onClick={(ev) => toggle(ev, email.id)}></i>
        <i className="trash far fa-trash-alt" onClick={(ev) => remove(ev, email.id)}></i>
      </div>
    </Link>
  )
}