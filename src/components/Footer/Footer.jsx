import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href='#home' className='footer_logo'>Kartikey Pandey</a>
        <ul className='links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
        </ul>

        <div className='footer_social'>
            <a href='https://www.linkedin.com/in/kartikey-pandey14/'><BsLinkedin/></a>
            <a href='https://github.com/Kartikey-Pandey'><BsGithub/></a>
            <a href='https://x.com/Kartike61394445'><BsTwitter/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Kartikey Pandey. All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer