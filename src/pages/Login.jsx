import { useEffect } from 'react';
import { SpotifyLogin } from './';
import { logo } from '../assets/img/img';

const Login = () => {
    return (
        <>
        <div 
            className="px-1 text-center bg-primary relative overflow-hidden"
        >
            <div
                style={{
                    width: '400px',
                    height: '400px',
                    top: '-200px',
                    left: '-200px',
                    position: 'absolute',
                }}
            >
                {logo}
            </div>
            <div
                style={{
                    width: '400px',
                    height: '400px',
                    bottom: '-200px',
                    right: '-200px',
                    position: 'absolute',
                }}
            >
                {logo}
            </div>
            <div className="mx-w-sm mx-auto h-screen flex flex-col justify-center">
                <h1 className="title-1">
                    Your Spotify Hits
                </h1>
                <h5 className="title-3 mt-3">
                    Discover and share your top tracks and artists
                </h5>
            <div className="mt-2">
                <SpotifyLogin />
            </div>
            </div>
        </div>
        </>
    )
}

export default Login