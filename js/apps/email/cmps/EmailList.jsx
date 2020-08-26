import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, removeEmail }) {

  return (
    <section className="email-list">
      {
        emails.map(email =>
          <section className="email" key={email.id}>
            <EmailPreview email={email} removeEmail={removeEmail} />
          </section>)
      }
    </section>
  )
}