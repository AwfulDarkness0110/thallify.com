import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { topTracks, resetList } from "../features/list/listSlice"
import { TrackItem, Nav, Header, LoadingItem } from "../components"
import { spotifyLogo } from "../assets/img/img"
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';


const Tracks = () => {
    const dispatch = useDispatch()
    const { tracks, isLoading } = useSelector(state => state.list)
    const [itemLimit, setItemLimit] = useState(10)
    const [timeRange, setTimeRange] = useState("short_term")
    const [layout, setLayout] = useState("list_layout")

    useEffect(() => {
        window.scrollTo(0, 0)

        document.title = "Thallify.com | Top Tracks"

        logEvent(analytics, 'screen_view', {
            screen_name: `Top Tracks`
        });
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
            <div className="filter-shadow">
                <Nav
                    active={timeRange}
                    setTimeRange={setTimeRange}
                    setLayout={setLayout}
                    layout={layout}
                    setItemLimit={setItemLimit}
                    itemLimit={itemLimit}
                />
                <div className="overflow-hidden parent-node">
                    <div className={`${layout === 'list_layout' ? 'flex-col ' : 'flex-row flex-wrap p-1 justify-center align-center gap-1 '}flex bg-main min-h-sm image-node`}>
                        <div className={`spotify-logo grid-col-1-1 border-bottom flex justify-between align-center ${layout === 'list_layout' ? 'p-1' : 'w-100 pb-2'}`}>
                            <div className="spotify-logo flex-grow">
                                <img src={spotifyLogo} alt="Spotify Logo" />
                            </div>
                            <div className="text-center">
                                <p className="fs-4">
                                    My Top Tracks
                                </p>
                                <p className="fs-5 mt-5">
                                    {timeRange === "short_term" ? "Last 7 Days" : timeRange === "medium_term" ? "Last 6 Month" : "All Time"}
                                </p>
                            </div>
                        </div>
                        {isLoading ? (
                            Array.from({ length: itemLimit }, (_, index) => (
                                <LoadingItem key={index} layout={layout} index={index+1} />
                            ))
                        ) : (
                            tracks && tracks.length > 0 && tracks.slice(0, itemLimit <= 0 ? 1 : itemLimit).map((item, index, arr) => (
                                <TrackItem 
                                    key={`item-${index}`}
                                    item={item}
                                    index={index}
                                    layout={layout}
                                    maxItemLimit={tracks.length}
                                />
                        )))}
                        <div className={`spotify-logo grid-col-1-1 border-top text-end ${layout === 'list_layout' ? 'p-1' : 'w-100 pt-2'}`}>
                            <p className="bold fs-4">
                                thallify.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks