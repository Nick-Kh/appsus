export function ComposeValidation({ isValid }) {

  let valid = '*All details are valid'
  let notValid = '*Enter valid details'

  return (
    <div className="compose-validation">
      {isValid ? <p className="valid">{valid}</p> : <p className="not-valid">{notValid}</p>}
    </div>
  )
}