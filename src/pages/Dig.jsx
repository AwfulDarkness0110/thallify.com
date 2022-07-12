import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { topArtists, resetList } from "../features/list/listSlice"
import { Nav, Header, DigItems } from "../components"
import { spotifyLogo } from "../assets/img/img"
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';


const Dig = () => {
    const dispatch = useDispatch()
    const [itemLimit, setItemLimit] = useState(30)
    const [timeRange, setTimeRange] = useState("short_term")
    const [layout, setLayout] = useState("list_layout")

    useEffect(() => {
        window.scrollTo(0, 0)

        document.title = "Thallify.com | Dig Deeper"

        logEvent(analytics, 'screen_view', {
            screen_name: `Dig`
        });
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
                    <div className={`${layout === 'list_layout' ? 'flex-col ' : 'flex-row flex-wrap p-1 justify-center gap-1 align-center '}flex bg-main min-h-sm image-node`}>
                        <div className={`spotify-logo grid-col-1-1 border-bottom flex justify-between align-center ${layout === 'list_layout' ? 'p-1' : 'w-100 pb-2'}`}>
                            <div className="pl-1 spotify-logo flex-grow">
                                <img src={spotifyLogo} alt="Spotify Logo" />
                            </div>
                            <div className="text-center pr-1">
                                <p className="fs-4">
                                    My Music Taste
                                </p>
                                <p className="fs-5 mt-5">
                                    {timeRange === "short_term" ? "Last 7 Days" : timeRange === "medium_term" ? "Last 6 Month" : "All Time"}
                                </p>
                            </div>
                        </div>
                        <DigItems itemLimit={itemLimit} />
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

export default Dig