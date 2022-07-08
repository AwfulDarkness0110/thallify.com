import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Skeleton } from '../'
import './styles/DigItems.css'


const DigItems = ({itemLimit}) => {
  const isLoading = useSelector(state => state.list.isLoading)
  const artists = useSelector(state => state.list.artists)
  const [genres, setGenres] = useState([])

  useEffect(() => {
    if (artists && artists?.length > 0) {
      const allGenres = artists.map(artist => artist.genres)
      let data = []
      // get genres if at least 3 artists has the same genre
      artists
      ?.filter(artist => artist.popularity)
      ?.sort((a, b) => b?.popularity - a?.popularity )
      ?.forEach(artist => {
        artist.genres?.forEach(genre => {
          if (!data.includes(genre)) {
            if(allGenres.filter(genres => genres.includes(genre)).length >= 4) {
              data.push(genre)
            }
          }
        })
      })
      setGenres(data)
    }
  }, [artists])

  return (
    <>
      {isLoading ? (
        <Skeleton
          height={640}
          animation="wave"
        />
      ) : (
        <div className="dig">
          <div className="dig-items dig-artists">
            {
              artists
              ?.slice(0, itemLimit < 6 ? 6 : itemLimit)
              ?.filter(artist => artist.popularity)
              ?.sort((a, b) => b?.popularity - a?.popularity )
              ?.map((item, index) => (
                index % 2 === 1 && (
                  <span
                    style={{
                      ['--order']: `${index}`
                    }}
                    key={`left-${index}`} className="flex align-center h-100 item-anim">
                    {item.name}
                  </span>
                )
              ))
            }
          </div>
          <div className="dig-items dig-genre">
            {
              genres?.map((item, index) => (
                <span
                  style={{
                    ['--order']: `${index}`
                  }}
                  key={`middle-${index}`} className="flex align-center h-100 item-anim text-capitalize">
                  {item}
                </span>
              ))
            }
          </div>
          <div className="dig-items dig-artists">
            {
              artists
              ?.slice(0, itemLimit < 6 ? 6 : itemLimit)
              ?.filter(artist => artist.popularity)
              ?.sort((a, b) => b?.popularity - a?.popularity )
              ?.map((item, index) => (
                index % 2 === 0 && (
                <span
                  style={{
                    ['--order']: `${index}`
                  }}
                  key={`right-${index}`} className="flex align-center h-100 item-anim">
                  {item.name}
                </span>
                )
              ))
            }
          </div>
        </div>
      )}
    </>
  )
}

export default DigItems