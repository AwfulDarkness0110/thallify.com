const TrackItem = ({item, index, layout}) => {
  return (
    <a 
      className="artist-item item-anim flex align-center bg-hover p-1"
      href={`${item.uri}`}
      style={{
        ['--order']: `${index}`
      }}
    >
      {layout === 'list_layout' ? (
      <>
      <span className="pr-1 mx-w-fs title-3 text-menu">
        {index + 1}
      </span>
      <div className="flex align-center flex-grow">
        <span
        className="img-cover"
          style={{
            backgroundImage: `url('${item.album.images[2].url}')`
          }}
        />
        <div className="flex flex-col flex-grow">
          <span className="fs-4">{item.name}</span>
          <span className="fs-5 mt-4 text-secondary text-capitalize">
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
      <div className="w-100 flex flex-col">
        <span
          className="img-cover img-cover-grid"
          style={{
            backgroundImage: `url('${item.album?.images[1].url}')`,
          }}
        />
        <p className="fs-4 text-center text-center mt-3">{item.name}</p>
      </div>
      </>
      )}
    </a>
  )
}

export default TrackItem