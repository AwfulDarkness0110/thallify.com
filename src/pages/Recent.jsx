import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { recentlyPlayed, resetList } from "../features/list/listSlice"
import { RecentItem, Nav, Header, LoadingItem } from "../components"
import { spotifyLogo } from "../assets/img/img"


const Tracks = () => {
    const dispatch = useDispatch()
    const { recent, isLoading } = useSelector(state => state.list)
    const [itemLimit, setItemLimit] = useState(10)
    const [layout, setLayout] = useState("list_layout")

    useEffect(() => {
        window.scrollTo(0, 0)
        const promise = dispatch(recentlyPlayed())

        document.title = "Thallify.com | Recently Played"

        return () => {
            promise && promise.abort()
            dispatch(resetList())
        }
    }, [])

    return (
        <div className="container pb-1 content">
            <Header />
            <div className="filter-shadow">
                <Nav
                    setLayout={setLayout}
                    layout={layout}
                    setItemLimit={setItemLimit}
                    itemLimit={itemLimit}
                />
                <div className="overflow-hidden">
                    <div className={`${layout === 'list_layout' ? 'flex-col ' : 'flex-row flex-wrap gap-1 p-1 justify-center align-center '}flex bg-main min-h-sm image-node`}>
                        <div className={`spotify-logo grid-col-1-1 border-bottom flex justify-between align-center ${layout === 'list_layout' ? 'p-1' : 'w-100 pb-2'}`}>
                            <div className="pl-1 spotify-logo flex-grow">
                                <img src={spotifyLogo} alt="Spotify Logo" />
                            </div>
                            <div className="text-end pr-1 flex-grow">
                                <p className="fs-4">
                                    My Recently
                                </p>
                                <p className="fs-5 mt-5">
                                    Played
                                </p>
                            </div>
                        </div>
                        {isLoading ? (
                            Array.from({ length: itemLimit }, (_, index) => (
                                <LoadingItem key={index} layout={layout} />
                            ))
                        ) : (
                            recent && recent.length > 0 && recent.slice(0, itemLimit).map((item, index, arr) => (
                                <RecentItem 
                                    key={`item-${index}`}
                                    item={item}
                                    index={index}
                                    layout={layout}
                                    maxItemLimit={recent.length}
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