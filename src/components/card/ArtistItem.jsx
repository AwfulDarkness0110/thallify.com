const ArtistItem = ({item, index, layout}) => {
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
      <div className="flex align-center">
        <span
        className="img-cover"
          style={{
            backgroundImage: `url('${item.images[2].url}')`
          }}
        />
        <div className="flex flex-col">
          <span className="fs-4">{item.name}</span>
          <span className="fs-5 mt-4 text-secondary text-capitalize">{item.genres.slice(-3).join(', ')}</span>
        </div>
      </div>
      </>
      ) : (
      <>
        <span
          className="img-cover img-cover-grid"
          style={{
            backgroundImage: `url('${item.images[1].url}')`,
          }}
        />
      </>
      )}
    </a>
  )
}

export default ArtistItem