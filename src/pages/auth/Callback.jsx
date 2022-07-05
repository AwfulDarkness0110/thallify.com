import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';

const Callback = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if(hash.startsWith('#access_token=')) {
            const accessToken = hash.split('=')[1].replace('&token_type', '');
            const expiresIn = hash.split('expires_in=')[1]
            const user = {
                accessToken,
                expiresIn,
            }
            dispatch(setUser(user));
            navigate('/top-artists');
        } else {
            navigate('/');
        }
    }, [navigate, location, dispatch]);

    return null
}

export default Callback