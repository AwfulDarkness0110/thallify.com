import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { topArtists, resetList } from "../features/list/listSlice"
import { ArtistItem, Nav, Header } from "../components"


const Artists = () => {
    const dispatch = useDispatch()
    const { artists, isLoading } = useSelector(state => state.list)
    const [itemLimit, setItemLimit] = useState(10)
    const [timeRange, setTimeRange] = useState("short_term")
    const [layout, setLayout] = useState("list_layout")

    useEffect(() => {
        window.scrollTo(0, 0)

        document.title = "Thallify.com | Top Artists"
    }, [])

    useEffect(() => {
        const promise = dispatch(topArtists({
            timeRange: timeRange,
        }))

        return () => {
            promise && promise.abort()
            dispatch(resetList())
        }
    }, [timeRange, dispatch])

    return (
        <div className="container pb-1 content">
            <Header />
            <div className="filter-shadow overflow-hidden">
                <Nav
                    active={timeRange}
                    setTimeRange={setTimeRange}
                    setLayout={setLayout}
                    layout={layout}
                    setItemLimit={setItemLimit}
                    itemLimit={itemLimit}
                />
                <div className={`${layout === 'list_layout' ? 'flex flex-col ' : 'grid grid-sm '}bg-main min-h-sm image-node`}>
                    {artists && artists.length > 0 && artists.slice(0, itemLimit).map((item, index, arr) => (
                        <ArtistItem 
                            key={`item-${index}`}
                            item={item}
                            index={index}
                            layout={layout}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Artists