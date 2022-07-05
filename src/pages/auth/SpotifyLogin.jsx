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
      <svg viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
      </svg>
      Sign in with Spotify
    </a>
  )
}

export default SpotifyLogin