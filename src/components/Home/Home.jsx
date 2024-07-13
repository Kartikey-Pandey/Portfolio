import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import kp2 from '../../../public/Imagess/kp2.jpeg'
import resume from '../../../public/Imagess/Kartikey-Pandey.jpg'
import './Home.css'

const Home = () => {
  return (
    <header id='home'>
        <div className='container home_container'>
        <h5>Hello, I'm</h5>
            <h1>Kartikey Pandey</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <div className='cta'>
                <a href={resume} download className='btn'>
                    Download Resume
                </a>
                <a href='#contact'  className='btn btn-primary'>
                    Contact Me
                </a>
            </div>
            <div className='home_social'>
                <a href='https://www.linkedin.com/in/kartikey-pandey14/'>
                    <BsLinkedin/>
                </a>
                <a href='https://github.com/Kartikey-Pandey'>
                    <BsGithub/>
                </a>
                <a href=''>
                    <BsMedium/>
                </a>
            </div>

            <div className='me'>
                <img src={kp2} alt='Kartikey' />
            </div>

            <a href='#contact' className='scroll_down'>
                Scroll Down
            </a>
        </div>
            
    </header>
  )
}

export default Home