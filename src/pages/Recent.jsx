import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { recentlyPlayed, resetList } from "../features/list/listSlice"
import { RecentItem, Nav, Header } from "../components"


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
                <div className={`${layout === 'list_layout' ? 'flex flex-col ' : 'grid grid-sm p-1 '}bg-main min-h-sm image-node`}>
                    {!isLoading && recent && recent.length > 0 && recent.slice(0, itemLimit).map((item, index, arr) => (
                        <RecentItem 
                            key={`item-${index}`}
                            item={item}
                            index={index}
                            layout={layout}
                            maxItemLimit={recent.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tracks