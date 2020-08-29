import { emailService } from './services/email-service.js'
import { eventBus } from '../../../services/event-bus-service.js'
import { EmailList } from './cmps/EmailList.jsx';
import { EmailDetails } from './EmailDetails.jsx';
import { Aside } from './cmps/Aside.jsx';

const { Route, Switch } = ReactRouterDOM

export class EmailApp extends React.Component {

  state = {
    emails: [],
    filterBy: ''
  }

  componentDidMount() {
    this.loadEmails()
    eventBus.on('loadEmails', () => {
      this.loadEmails()
    })
  }

  loadEmails() {
    emailService.query()
      .then(emails => {
        this.setState({ emails })
      })
  }

  getEmails = () => {
    if (this.state.filterBy === '') return this.state.emails
    else if (this.state.filterBy === 'read') return this.state.emails.filter(email => !email.isRead)
    else if (this.state.filterBy === 'notRead') return this.state.emails.filter(email => email.isRead)
    else if (this.state.filterBy === 'sent') return this.state.emails.filter(email => email.isSent)
  }

  filterEmails = (filterBy) => {
    this.setState({ filterBy })
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
          <Aside filterEmails={this.filterEmails} />
          <Switch>
            {/* <EmailList emails={emails} removeEmail={this.removeEmail} readToggle={this.readToggle} />
            <EmailDetails /> */}
            <Route component={EmailDetails} path="/email/:emailId" />
            <Route path="/email" component={() => <EmailList emails={this.getEmails()} removeEmail={this.removeEmail} readToggle={this.readToggle} />} />
          </Switch>
        </div>
      </section>
    )
  }
}


// export class EmailApp extends React.Component {

//   state = {
//     emails: [],
//     filterBy: 'read'
//   }

//   componentDidMount() {
//     this.loadEmails()
//     eventBus.on('loadEmails', () => {
//       this.loadEmails()
//     })
//     eventBus.on('loadReadEmails', () => {
//       this.loadReadEmails()
//     })
//   }

//   getEmails = () => {
//     if (this.state.filterBy === 'read') return this.state.emails.filter(email => !email.isRead)
//   }

//   loadEmails() {
//     emailService.query()
//       .then(emails => {
//         this.setState({ emails })
//       })
//   }

//   loadReadEmails() {
//     emailService.readEmails()
//       .then(emails => {
//         this.setState({ emails })
//       })
//   }

//   readToggle = (idx) => {
//     emailService.readToggle(idx)
//     this.loadEmails()
//   }

//   removeEmail = (idx) => {
//     emailService.removeEmail(idx)
//     this.loadEmails()
//   }

//   render() {

//     const { emails } = this.state

//     return (
//       <section className="email-app">
//         <div className="container flex">
//           <Aside />
//           <Switch>
//             {/* <EmailList emails={emails} removeEmail={this.removeEmail} readToggle={this.readToggle} />
//             <EmailDetails /> */}
//             <Route component={EmailDetails} path="/email/:emailId" />
//             <Route path="/email" component={() => <EmailList emails={this.getEmails()} removeEmail={this.removeEmail} readToggle={this.readToggle} />} />
//           </Switch>
//         </div>
//       </section>
//     )
//   }
// }