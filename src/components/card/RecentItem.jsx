const RecentItem = ({item, index, layout}) => {
  return (
    <a 
      className="artist-item flex flex-grow align-center bg-hover py-1 px-3"
      href={`${item.track.uri}`}
      style={{
        ['--order']: `${index}`
      }}
    >
      {layout === 'list_layout' ? (
      <>
      <div className="flex align-center flex-grow">
        <img
          src={item.track.album?.images[2].url}
          className="img-cover"
          alt={item.track.name}
        />
        <div className="flex flex-col flex-grow pr-3">
          <p className="fs-4 item-anim">{item.track.name}</p>
          <p className="fs-6 mt-5 text-secondary item-anim">{item.track.album.name}</p>
          <p className="fs-6 mt-5 text-secondary item-anim bold">
            {item.track.artists.map((artist, index) => (
              <span key={`artist-${index}`}>
                {index > 0 && ', '}
                {artist.name}
              </span>
            ))}
          </p>
        </div>
        <span className="time text-end flex-grow fs-5 bold">
          {new Date(item.played_at).toLocaleTimeString('en-US', {hourCycle: 'h24', hour: 'numeric', minute: 'numeric'})}
        </span>
      </div>
      </>
      ) : (
        <div className="flex-grow flex flex-col justify-center align-center">
          <img
            src={item.track.album?.images[2].url}
            className="img-cover img-cover-grid"
            alt={item.track.name}
          />
          <p className="fs-5 bold text-center text-center mt-4 w-100 text-center">{item.track.name}</p>
          <p className="fs-6 mt-5 text-secondary item-anim w-100 text-center">{item.track.album.name}</p>
          <p className="fs-6 mt-5 text-secondary item-anim bold w-100 text-center">
            {item.track.artists.map((artist, index) => (
              <span key={`artist-${index}`}>
                {index > 0 && ', '}
                {artist.name}
              </span>
            ))}
            </p>
        </div>
      )}
    </a>
  )
}

export default RecentItem