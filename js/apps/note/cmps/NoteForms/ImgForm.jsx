export const ImgForm = () => {
  return (
    <input
      type='url'
      name='url'
      id='url'
      placeholder='Enter image URL'
      pattern='https://.*'
      size='30'
      required
    />
  )
}
