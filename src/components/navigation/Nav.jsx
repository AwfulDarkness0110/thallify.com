import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { saveAs } from 'file-saver'
import html2canvas from "html2canvas"
import { downloadIcon, gridIcon, listIcon, loadingIcon } from "../../assets/icons/icons"
import "./styles/Nav.css"
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../firebase';


const Nav = ({active, setTimeRange, setLayout, layout, setItemLimit, itemLimit, maxItemLimit}) => {
    const location = useLocation()
    const [isSaving, setIsSaving] = useState(false)
    const activeRef = useRef(null);
    const indicatorRef = useRef(null);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        const activeTab = activeRef.current;
        const indicator = indicatorRef.current;
        if (indicator && activeTab) {
            const activeTabWidth = activeTab.offsetWidth;
            const activeTabLeft = activeTab.offsetLeft;
            setIndicatorWidth(activeTabWidth);
            setIndicatorLeft(activeTabLeft);
        }
    }, [active, windowWidth])

    const downloadImage = () => {
        setIsSaving(true)
        document.querySelector('.image-node').classList.add('saving')
        document.querySelector('.parent-node').classList.add('opacity-0')
        document.querySelector('.image-node').style.minWidth = '550px'
        document.querySelector('.image-node').style.maxWidth = '550px'

        setTimeout(() => {
            html2canvas(document.querySelector('.image-node'), {
                allowTaint: true,
                useCORS: true,
                scale: 2,
                width: document.querySelector('.image-node').offsetWidth,
                height: document.querySelector('.image-node').offsetHeight,
                dpi: 300,
            }).then(canvas => {
                const png = canvas.toDataURL("image/png")
                saveAs(png, 'image.png')
                logEvent(analytics, 'download_image', {
                    item_list: location.pathname,
                    item_limit: itemLimit,
                    item_range: active ? active : 'short_term',
                });
                setIsSaving(false)
                document.querySelector('.image-node').classList.remove('saving')
                document.querySelector('.image-node').style.minWidth = '0px'
                document.querySelector('.image-node').style.maxWidth = 'unset'
                document.querySelector('.parent-node').classList.remove('opacity-0')
            }).catch(err => {
                console.log(err)
                setIsSaving(false)
                document.querySelector('.image-node').classList.remove('saving')
                document.querySelector('.image-node').style.minWidth = '0px'
                document.querySelector('.image-node').style.maxWidth = 'unset'
                document.querySelector('.parent-node').classList.remove('opacity-0')
            })
        }, 1000)
    }

    return (
        <div className="nav">
            <div className="nav-left">
                {!location.pathname.includes('/recently-played') && (
                <>
                <div 
                    ref={active === 'short_term' ? activeRef : null}
                    onClick={() => setTimeRange('short_term')}
                    className={`nav-item${active === 'short_term' ? ' active' : '' }`}>
                    Last 7 Days
                </div>
                <div 
                    ref={active === 'medium_term' ? activeRef : null}
                    onClick={() => setTimeRange('medium_term')}
                    className={`nav-item${active === 'medium_term' ? ' active' : '' }`}>
                    Last 6 months
                </div>
                <div 
                    ref={active === 'long_term' ? activeRef : null}
                    onClick={() => setTimeRange('long_term')}
                    className={`nav-item${active === 'long_term' ? ' active' : '' }`}>
                    All time
                </div>
                </>
                )}
                <span className="tabs-indicator" ref={indicatorRef}
                    style={{
                        width: indicatorWidth,
                        left: indicatorLeft,
                    }}
                />
            </div>
            <div className="nav-right">
                <div className={`nav-item`}>
                    <input
                        onClick={(e) => e.target.select()}
                        title="Item limit"
                        type="number"
                        value={itemLimit}
                        onChange={(e) => { 
                            e.target.value < 0 ?
                            setItemLimit(0) :
                            e.target.value > 50 ?
                            setItemLimit(50) :
                            setItemLimit(e.target.value)
                        }}
                    />
                </div>
                {isSaving ? (
                    <div
                        title="Downloading image"
                        className={`nav-item spinner`}>
                        {loadingIcon}
                    </div>
                ) : 
                    <div
                        title="Download"
                        onClick={downloadImage}
                        className={`nav-item`}>
                        {downloadIcon}
                    </div>
                }
                {!location.pathname.includes('/dig') && (
                <>
                <div
                    className={`nav-item divider`}>
                    |
                </div>
                <div
                    title="Grid"
                    onClick={() => setLayout('gird_layout')}
                    className={`nav-item${layout === 'gird_layout' ? ' active' : '' }`}>
                    {gridIcon}
                </div>
                <div 
                    title="List"
                    onClick={() => setLayout('list_layout')}
                    className={`nav-item${layout === 'list_layout' ? ' active' : '' }`}>
                    {listIcon}
                </div>
                </>
                )}
            </div>
        </div>
    )
}

export default Nav