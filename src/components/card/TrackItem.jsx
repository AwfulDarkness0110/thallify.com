const TrackItem = ({item, index, layout}) => {
  return (
    <a 
      className="artist-item flex flex-grow align-center bg-hover py-1 px-3"
      href={`${item.uri}`}
      style={{
        ['--order']: `${index}`
      }}
    >
      {layout === 'list_layout' ? (
      <>
      <span className="mx-w-fs title-3 text-menu item-anim">
        {index + 1}
      </span>
      <div className="flex align-center flex-grow">
        <img
          className="img-cover"
          src={item.album?.images[2].url}
          alt={item.name}
        />
        <div className="flex flex-col flex-grow">
          <span className="fs-4 item-anim">{item.name}</span>
          <span className="fs-6 mt-5 text-secondary item-anim">{item.album.name}</span>
          <span className="fs-6 mt-5 text-secondary item-anim bold">
            {item.artists.map((artist, index) => (
              <span key={`artist-${index}`}>
                {index > 0 && ', '}
                {artist.name}
              </span>
            ))}
          </span>
        </div>
      </div>
      </>
      ) : (
      <>
      <div className="flex flex-col flex-grow justify-center align-center">
        <div>
          <img
            className="img-cover img-cover-grid"
            src={item.album?.images[2].url}
            alt={item.name}
          />
        </div>
        <p className="fs-5 bold text-center text-center mt-4 w-100 text-center">{item.name}</p>
        <p className="fs-6 mt-5 text-secondary item-anim w-100 text-center">{item.album.name}</p>
        <p className="fs-6 mt-5 text-secondary item-anim bold w-100 text-center">
          {item.artists.map((artist, index) => (
            <span key={`artist-${index}`}>
              {index > 0 && ', '}
              {artist.name}
            </span>
          ))}
          </p>
      </div>
      </>
      )}
    </a>
  )
}

export default TrackItem