import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { logo } from '../../assets/img/img'
import { peopleIcon, audioIcon, historyIcon } from '../../assets/icons/icons'
import "./styles/Sidebar.css"


const Sidebar = () => {
  const { user } = useSelector(state => state.user)

  return (
    user ? 
    <div className="sidebar">
      <NavLink to="/about" className="logo">
        {logo}
      </NavLink>
      <NavLink to="/top-artists" className="sidebar-item">
        {peopleIcon}
        <span>Top Artists</span>
      </NavLink>
      <NavLink to="/top-tracks" className="sidebar-item">
        {audioIcon}
        <span>Top Tracks</span>
      </NavLink>
      <NavLink to="/recently-played" className="sidebar-item">
        {historyIcon}
        <span>Recent</span>
      </NavLink>
    </div>
    : null
  )
}

export default Sidebar