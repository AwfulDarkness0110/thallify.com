import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Login } from '../pages'
import { Sidebar } from '../components'


const AuthGate = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        // Check if expiresIn is already expired
        if (user && user.expiresIn && user.loginTime && ((+user.expiresIn * 1000) + (+user.loginTime)) < Date.now()) {
            console.log("Token expired, please login again");
            localStorage.removeItem('user');
            window.location.reload();
            navigate('/');
        } else if (user) {
            console.log('Token will expire in minutes: ', (((+user.expiresIn * 1000) + (+user.loginTime) - Date.now()) / 60000).toFixed(2));
        }

        if(!user && location.pathname !== '/about') {
            navigate('/');
        }
    }, [dispatch, navigate, user]);

    return (
        (user || (location.pathname === '/about')) ? <div className="app"><Sidebar/>{children}</div> : <Login />
    )
}

export default AuthGate