import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { infoIcon, homeIcon } from '../../assets/icons/icons';
import "./styles/Header.css"

const Header = () => {
    const location = useLocation();
    const { user } = useSelector(state => state.user);

    return (
        <div className="header">
            <div className="flex justify-between align-center">
                <h1 className="header-title text-menu filter-shadow">
                    {
                        location.pathname.includes('/top-artists') ? 'Top Artists' :
                        location.pathname.includes('/top-tracks') ? 'Top Tracks' :
                        location.pathname.includes('/dig') ? 'Dig Deeper' :
                        location.pathname.includes('/about') ? 'Thallify.com' :
                        "Recent"
                    }
                </h1>
                {!location.pathname.includes('/about') ? (
                    <Link to="/about" className="icon-sm icon-btn" title="About">
                        {infoIcon}
                    </Link>
                ) : (
                    <Link to={user ? "/top-artists" : "/"} className="icon-sm icon-btn" title="Home">
                        {homeIcon}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header