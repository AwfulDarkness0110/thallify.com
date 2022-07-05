import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { topTracks, resetList } from "../features/list/listSlice"
import { TrackItem, Nav, Header } from "../components"


const Tracks = () => {
    const dispatch = useDispatch()
    const { tracks } = useSelector(state => state.list)
    const [itemLimit, setItemLimit] = useState(10)
    const [timeRange, setTimeRange] = useState("short_term")
    const [layout, setLayout] = useState("list_layout")

    useEffect(() => {
        window.scrollTo(0, 0)

        document.title = "Thallify.com | Top Tracks"
    }, [])

    useEffect(() => {
        const promise = dispatch(topTracks({
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
                    {tracks && tracks.length > 0 && tracks.slice(0, itemLimit).map((item, index, arr) => (
                        <TrackItem 
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

export default Tracks