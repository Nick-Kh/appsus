import { eventBus } from '../services/event-bus-service.js'

export class Modal extends React.Component {

  state = {
    isShown: false
  }

  componentDidMount() {
    eventBus.on('openModal', () => {
      this.setState({ isShown: true })
    })
    eventBus.on('closeModal', () => {
      this.setState({ isShown: false })
    })
  }

  closeModal = () => {
    this.setState({ isShown: false })
  }

  render() {
    const { isShown } = this.state
    const { children } = this.props
    return (
      <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
        <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
          <button className="close-modal-btn" onClick={this.closeModal}>x</button>
          <h2>Add a new book</h2>
          {children}
        </div>
      </div >
    )
  }
}