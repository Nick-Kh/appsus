import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'

export class EmailCompose extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    console.log('mounted');
    this.setState({ email: emailService.getEmptyEmail() })
  }

  onInputChange = (ev) => {
    const value = ev.target.value
    this.setState({ email: { ...this.state.email, [ev.target.name]: value } })
  }

  saveEmail = () => {
    emailService.saveEmail(this.state.email)
    eventBus.emit('closeModal')
    eventBus.emit('loadEmails')
  }

  render() {

    return (
      <section className="email-compose">
        <div className="compose-header">
          <p>New Message</p>
        </div>
        <div className="compose-body">
          <input type="text" id="compose-from" name="from" placeholder="Name" onChange={this.onInputChange} />
          <input type="text" id="compose-from" name="email" placeholder="Email" onChange={this.onInputChange} />
          <input type="text" id="compose-subject" name="subject" placeholder="Subject" onChange={this.onInputChange} />
          <textarea id="compose-text" name="body" onChange={this.onInputChange} />
          <button className="email-send-btn" onClick={this.saveEmail}>Send</button>
        </div>
      </section>
    )
  }
}


// export class PetEdit extends React.Component {
//   state = {
//     pet: petService.getEmpty(),
//   }

//   elInput = React.createRef()

//   componentDidMount() {
//     const { id } = this.props.match.params
//     if (id) petService.getById(id).then(pet => this.setState({ pet }))

//     this.elInput.current.focus()
//   }
//   onInputChange = (ev) => {
//     console.log('Input:', ev.target.name);
//     console.log('Changed', ev.target.value);
//     const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
//     this.setState({ pet: { ...this.state.pet, [ev.target.name]: value } })
//   }
//   addPet = (ev) => {
//     ev.preventDefault();
//     console.log('Adding Pet');
//     petService.save(this.state.pet)
//     eventBus.emit('notify', { msg: 'Pet Saved', type: 'fail' })
//     this.props.history.push('/pet')
//   }

//   render() {
//     return (
//       <div className='pet-edit'>
//         <input ref={this.elInput} name="name" value={this.state.pet.name}
//           placeholder="Pet Name" type="text"
//           onChange={this.onInputChange}
//         />
//         <input name="power" value={this.state.pet.power}
//           placeholder="Pet Power" type="number"
//           onChange={this.onInputChange}
//         />
//         <button onClick={this.addPet}>Save Pet</button>
//       </div>


//     )
//   }
// }