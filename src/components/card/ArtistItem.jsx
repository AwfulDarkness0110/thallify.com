const ArtistItem = ({item, index, layout}) => {
  return (
    <a 
      className={`artist-item flex flex-grow align-center bg-hover p-1`}
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
          src={item.images[2].url}
          className="img-cover"
          alt={item.name}
        />
        <div className="flex flex-col flex-grow item-anim">
          <span className="fs-4">{item.name}</span>
          <span className="fs-5 mt-4 text-secondary text-capitalize">{item.genres.slice(-3).join(', ')}</span>
        </div>
      </div>
      </>
      ) : (
      <>
        <div className="flex flex-col justify-center align-center flex-grow">
          <div>
            <img
              className="img-cover img-cover-grid"
              src={item.images[2].url}
              alt={item.name}
            />
          </div>
          <p className="fs-5 bold text-center text-center mt-4 w-100 text-center">{item.name}</p>
          <p className="fs-6 mt-5 text-secondary item-anim w-100 text-center">
            {item.genres.slice(-1).join(', ')}
          </p>
        </div>
      </>
      )}
    </a>
  )
}

export default ArtistItem