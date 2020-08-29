export const ImgForm = ({
  onInputURL,
  onImageUpload,
  imgURL,
  onTitleChange,
  currUrl,
}) => {
  return (
    <div className='img-form'>
      <form onSubmit={(ev) => onImageUpload(ev)}>
        <input
          type='url'
          name='url'
          id='url'
          placeholder='Enter image URL'
          pattern='http.*'
          size='30'
          required
          value={currUrl}
          onChange={(ev) => onInputURL(ev.target.value)}
        />
        <button className='note-btn' type='submit'>
          Upload Image
        </button>
      </form>
      {imgURL ? (
        <div className='upload-img'>
          <img src={imgURL} />
          <input
            placeholder='Enter image title...'
            name='title'
            type='text'
            onChange={(ev) => onTitleChange(ev.target.value)}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
