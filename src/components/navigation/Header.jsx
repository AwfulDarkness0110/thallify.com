import { useLocation } from 'react-router-dom';
import "./styles/Header.css"

const Header = () => {
    const location = useLocation();

    return (
        <div className="header">
            <h1 className="header-title text-menu filter-shadow">
                {
                    location.pathname.includes('/top-artists') ? 'Top Artists' :
                    location.pathname.includes('/top-tracks') ? 'Top Tracks' :
                    location.pathname.includes('/dig') ? 'Dig Deeper' :
                    "Recent"
                }
            </h1>
        </div>
    )
}

export default Header