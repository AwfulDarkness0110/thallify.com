import { useState } from "react"
import { useLocation } from "react-router-dom"
import { toPng } from 'html-to-image'
import { saveAs } from 'file-saver'
import { downloadIcon, gridIcon, listIcon, loadingIcon } from "../../assets/icons/icons"
import "./styles/Nav.css"

const Nav = ({active, setTimeRange, setLayout, layout, setItemLimit, itemLimit}) => {
    const location = useLocation()
    const [isSaving, setIsSaving] = useState(false)


    const downloadImage = () => {
        setIsSaving(true)
        const node = document.querySelector('.image-node')

        const newElement = document.createElement('div')

        newElement.className = 'p-1 title-2 border-bottom text-center'
        newElement.style.gridColumn = '1/-1'
        newElement.innerHTML = `
        <div>
        ${location.pathname.includes('/recently-played') ? 'My recently played tracks'
        :
        `My top ${location.pathname.includes('/top-artists') ? 'artists' : 'tracks'} ${active === 'short_term' ? 'last month' : active === 'medium_term' ? 'last 6 month' : 'of all time'}`
        }
        </div>
        `
        node.insertBefore(newElement, node.firstChild)

        toPng(node)
        .then(function (dataUrl) {
            saveAs(dataUrl, 'thallify.png');
            setIsSaving(false)
            document.querySelector('.image-node').removeChild(newElement)
        })
        .catch(function (error) {
            setIsSaving(false)
            document.querySelector('.image-node').removeChild(newElement)
            console.error('oops, something went wrong!', error);
        });
    }

    return (
        <div className="nav">
            <div className="nav-left">
                {!location.pathname.includes('/recently-played') && (
                <>
                <div 
                    onClick={() => setTimeRange('short_term')}
                    className={`nav-item${active === 'short_term' ? ' active' : '' }`}>
                    Last month
                </div>
                <div 
                    onClick={() => setTimeRange('medium_term')}
                    className={`nav-item${active === 'medium_term' ? ' active' : '' }`}>
                    Last 6 months
                </div>
                <div 
                    onClick={() => setTimeRange('long_term')}
                    className={`nav-item${active === 'long_term' ? ' active' : '' }`}>
                    All time
                </div>
                </>
                )}
            </div>
            <div className="nav-right">
                <div className={`nav-item`}>
                    <input
                        title="Item limit"
                        type="number"
                        value={itemLimit}
                        onChange={(e) => { 
                            e.target.value < 6 ?
                            setItemLimit(6) :
                            e.target.value > 50 ?
                            setItemLimit(50) :
                            setItemLimit(e.target.value)
                        }}
                        min="6"
                        max="50"
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
            </div>
        </div>
    )
}

export default Nav