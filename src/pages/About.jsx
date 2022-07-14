import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react'
import { downloadIcon } from '../assets/icons/icons'
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';
import { Header } from '../components'

const About = () => {
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    window.scrollTo(0, 0)

    document.title = "Thallify.com | About"

    logEvent(analytics, 'screen_view', {
      screen_name: `About`
    });
  }, [])

  return (
    <div className={`container pb-1${user ? " content" : ""}`}>
      <Header />
      <div className="filter-shadow bg-main p-1">
        <div className="pb-1 border-bottom">
          <br />
          <h1 className="title-2 bold">
            About
          </h1>
          <br />
          <p>
            Thallify.com was developed by <a href="https://www.instagram.com/bohdan.khvorostovskyi/" target="_blank" rel='noopener noreferrer' className="bold">Bohdan Khvorostovskyi</a> as an open source app powered by the Spotify Web API. This service is not intended for monetization. 
            <br />
            <br />
            For any further inquiries or suggestions, please email me at <a className="bold" href="mailto:pevbog@gmail.com">pevbog@gmail.com</a>
            <br />
            <br />
            With Thallify.com, you can easily find your favorite tracks and artists which you listened to on Spotify and download the snapshot for easy sharing.
            <br />
            <br />
            Thanks for using Thallify.com
          </p>
        </div>
        <div className="pb-1 pt-1 border-bottom">
          <h1 className="title-2 bold">FAQ</h1>
          <br />
          <h3>
            Why is my list empty or not full?
          </h3>
          <p className="mt-4">
          If your list is empty or not full, then you have not been listening to music in the time range that you choose. Try to listen to more music and come back to see your list grow.
          </p>
          <br />
          <h3>
            How do I make a snapshot or download my list?
          </h3>
          <p className="mt-4">
            Just click the  <i className="icon-sm px-3">{downloadIcon}</i>  button on the top of the list, and the list will be downloaded as a PNG file to your device.
          </p>
          <br />
          <h3>
            The artist or track covers are not displayed on the downloaded image.
          </h3>
          <p className="mt-4">
            This is because the image is generated directly on the client site. Try using a different browser or device to see if the image is displayed correctly.
          </p>
          <br />
          <h3>
            How do I change the length of my list?
          </h3>
          <p className="mt-4">
            You can change the length of your list by pressing the number input on the top of the list, and then selecting the length that you want.
          </p>
          <br />
          <h3>
            What is "Dig deeper"?
          </h3>
          <p className="mt-4">
            The Dig deeper displays how common or unique your top listened artists and genres are. Starting from the top as most common and unique on the bottom.
          </p>
        </div>
        <div className="pb-1 pt-1">
          <h1 className="title-2 bold">Privacy and Spotify access</h1>
          <br />
          <p>
          Application requires a Spotify account. Application works as a client side only and your Spotify data is not stored. Application does not save your Spotify data to any server, information will not be stored, used, or shared with any third parties. Thallify.com uses Google analytics to make a better user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About