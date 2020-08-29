export function LongTxt({ text, isLongTxtShown }) {

  const lessText = text.slice(0, 100);
  const moreText = text.slice(100);

  return (
    <p className={"text"}>
      {isLongTxtShown ? lessText + moreText + ' ' : lessText + '... '}
    </p>
  )
}