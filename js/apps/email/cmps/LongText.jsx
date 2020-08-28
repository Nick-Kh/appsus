export function LongTxt({ text }) {

  const shortText = text.slice(0, 100);

  return (
    <div className={"em-cont email-body"}>
      {text.length > 100 ? shortText + '...' : text}
    </div>
  )
}