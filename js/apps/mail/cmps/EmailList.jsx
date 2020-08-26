import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails }) {
  return (
    <section className="email-list">
      {
        emails.map(email =>
          <div className="email" key={email.id}>
            <EmailPreview email={email} />
          </div>)
      }
    </section>
  )
}