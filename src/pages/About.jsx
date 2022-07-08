import { useEffect } from 'react'
import React from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    document.title = "Thallify.com | About"
  }, [])

  return (
    <div className="container pb-1 content pt-1">
      <div className="p-1">
        <div>
          <h1 className="title-2 bold">About Thallify.com</h1>
          <br />
          <p>
            Thallify.com was developed by <a href="https://www.instagram.com/bohdan.khvorostovskyi/" target="_blank" rel='noopener noreferrer' className="bold">Bohdan Khvorostovskyi</a> as an open source app powered by the Spotify Web API. This service is not intended for monetization. 
            <br />
            <br />
            For any further inquiries or suggestions, please email me at <a className="bold" href="mailto:pevbog@gmail.com">pevbog@gmail.com</a>
            <br />
            <br />
            With Thallify.com, you can easily find your favorite tracks and artists on Spotify and download the snapshot for easy sharing.
            <br />
            <br />
            Thanks for using Thallify.com
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="title-2 bold">Spotify access</h1>
          <br />
          <p>
          Application requires a Spotify account. It also needs access to your Spotify account. Application works as client side only and your Spotify data is not stored.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="title-2 bold">Privacy</h1>
          <br />
          <p>
          Application does not save your Spotify data to any server. No information shared will be stored, used, or shared with any third parties.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About