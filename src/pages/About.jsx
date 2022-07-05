import { useEffect } from 'react'
import React from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    document.title = "Thallify.com | About"
  }, [])

  return (
    <div className="container pb-1 content mt-1">
      <div className="p-1">
        <div>
          <h1 className="title-2">Thallify.com</h1>
          <br />
          <p>
            With Thallify.com, you can easily find your favorite tracks and artists on Spotify.
            <br />
            Make sure to download the snapshot of your top tracks or artists and share it with your friends.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="title-2">Spotify access</h1>
          <br />
          <p>
          Application requires a Spotify account. It also needs access to your Spotify account. Application works as client side only and your Spotify data is not stored.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="title-2">Privacy</h1>
          <br />
          <p>
          Application does not save your Spotify data to any server.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About