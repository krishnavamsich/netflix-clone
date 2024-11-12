import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from'../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />

      </div>
      <ul>
        <li>Audio dexxription</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Jobs</li>
        <li>Investor Relations</li>
        <li>Terms of use</li>
        <li>Legal notices</li>
        <li>Cookie performance </li>
        <li>Coorparate Information </li>
        <li>Contacy us</li>

      </ul>
      <p className="copyright-text">
        @1997-2024 Netflix,inc.
      </p>
    </div>
  )
}

export default Footer
