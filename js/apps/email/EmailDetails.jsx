import { emailService } from './services/email-service.js'

export class EmailDetails extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    this.getEmail();
  }

  getEmail = () => {
    const emailId = this.props.match.params.emailId
    const email = emailService.getEmail(emailId)
    this.setState({ email })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {

    const { email } = this.state;
    if (!email) return <div>Loading...</div>

    return (
      <section className="email-details">
        <i className="fas fa-arrow-left" onClick={this.goBack}></i>
        <h2 className="details-el subject">{email.subject}</h2>
        <h1 className="details-el from">{email.from}</h1>
        <p className="details-el received">{email.receivedAt}</p>
        <div className="details-el body">{email.body}</div>
        <button className="reply-btn">Reply</button>
      </section>
    )
  }
}

// function _NavBar(props) {
//   console.log(props.history);
//   function goBack() {
//     props.history.goBack()
//   }
//   return (
//     <nav>
//       <NavLink exact activeClassName='active-nav' to="/">Home</NavLink>|
//       <NavLink to="/pet">Pets</NavLink>|
//       <NavLink to="/about">About</NavLink>|
//       <button onClick={goBack}>Back</button>
//     </nav>
//   )
// }
// export const NavBar = withRouter(_NavBar)