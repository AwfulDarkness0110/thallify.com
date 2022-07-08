const SpotifyLogin = () => {
  // const client_id = process.env.REACT_APP_CLIENT_ID;
  // const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const client_id = "347914a23b8f4e0e88ade72e47daab9a";
  const redirect_uri = 'https://thallify.com/callback/';
  const scope = 'user-top-read user-read-recently-played';

  return (
    <a
      href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`}
      className="btn btn-lg"
    >
      Sign in with Spotify
    </a>
  )
}

export default SpotifyLogin