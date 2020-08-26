const { Link } = ReactRouterDOM;

export function EmailPreview({ email, removeEmail }) {

  function remove(ev, emailId) {
    ev.stopPropagation();
    removeEmail(ev, emailId)
  }

  return (
    <Link to={`/mail/${email.id}`}>
      <div className={`email-preview ${email.isRead ? "unread" : "read"}`}>
        <p className="em-cont email-from">{email.from}</p>
        <p className="em-cont email-subject">{email.subject}</p>
        <p className="em-cont email-body">{email.body}</p>
        <i className={`envelope ${email.isRead ? "far fa-envelope" : "far fa-envelope-open"}`}></i>
        <i className="trash far fa-trash-alt" onClick={(ev) => remove(ev, email.id)}></i>
      </div>
    </Link>
  )
}