export const VidForm = ({
  onInputURL,
  vidURL,
  onTitleChange,
  currTitle,
  currUrl,
  isVidLoaded,
  onVidLoad,
}) => {
  return (
    <div className='img-form'>
      <form onSubmit={(ev) => onImageUpload(ev)}>
        <input
          type='url'
          name='url'
          id='url'
          placeholder='Enter video URL'
          pattern='http.*'
          size='30'
          required
          value={currUrl}
          onChange={(ev) => onInputURL(ev.target.value)}
        />
      </form>
      {console.log(isVidLoaded)}
      <iframe
        onLoad={onVidLoad}
        placeholder='your vid'
        width='250'
        height='200'
        src={currUrl}></iframe>
      <div className='upload-vid'>
        <input
          value={currTitle}
          placeholder='Enter video title...'
          name='title'
          type='text'
          onChange={(ev) => onTitleChange(ev.target.value)}
        />
      </div>
    </div>
  )
}
