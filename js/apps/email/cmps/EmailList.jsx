import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, removeEmail, readToggle }) {

  return (
    <section className="email-list">
      {
        emails.map(email =>
          <section className="email" key={email.id}>
            <EmailPreview email={email} removeEmail={removeEmail} readToggle={readToggle}/>
          </section>)
      }
    </section>
  )
}