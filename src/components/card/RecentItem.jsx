const RecentItem = ({item, index, layout}) => {
  return (
    <a 
      className="artist-item item-anim flex align-center bg-hover p-1"
      href={`${item.track.uri}`}
      style={{
        ['--order']: `${index}`
      }}
    >
      {layout === 'list_layout' ? (
      <>
      <div className="flex align-center flex-grow">
        <span
        className="img-cover"
          style={{
            backgroundImage: `url('${item.track.album?.images[2].url}')`
          }}
        />
        <div className="flex flex-col flex-grow">
          <span className="fs-4">{item.track.name}</span>
          <span className="fs-5 mt-4 text-secondary text-capitalize">
            {item.track.artists.map((artist, index) => (
              <span key={`artist-${index}`}>
                {index > 0 && ', '}
                {artist.name}
              </span>
            ))}
          </span>
        </div>
        <span className="">
          {new Date(item.played_at).toLocaleTimeString()}
        </span>
      </div>
      </>
      ) : (
        <div className="w-100 flex flex-col">
          <span
            className="img-cover img-cover-grid"
            style={{
              backgroundImage: `url('${item.track.album?.images[1].url}')`,
            }}
          />
          <p className="fs-4 text-center text-center mt-3">{item.track.name}</p>
        </div>
      )}
    </a>
  )
}

export default RecentItem