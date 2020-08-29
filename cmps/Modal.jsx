import { eventBus } from '../services/event-bus-service.js'
import { EmailCompose } from '../js/apps/email/cmps/EmailCompose.jsx'

export class Modal extends React.Component {

  state = {
    isShown: true
  }

  componentDidMount() {
    eventBus.on('closeModal', () => {
      this.setState({ isShown: false })
    })
  }

  closeModal = () => {
    this.setState({ isShown: false })
    eventBus.emit('emailSent')
  }

  render() {

    const { isShown } = this.state

    return (
      <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
        <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
          <span className="close-modal-btn" onClick={this.closeModal}>&times;</span>
          <EmailCompose />
        </div>
      </div >
    )
  }
}