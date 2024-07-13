import React from 'react'
import myImage from '../../../public/Imagess/kp4.jpeg'
import { GiGraduateCap} from "react-icons/gi"
import {BsTelephoneForward} from "react-icons/bs"
import { TfiWorld} from "react-icons/tfi"
import './About.css'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me_image'>
                    <img src={myImage} alt='Kartikey' />
                </div>
            </div>

            <div className='about_content'>
                <div className='about_cards'>
                    <article className='about_card'>
                        <GiGraduateCap className='about_icon'/>
                        <h5>Degree</h5>
                        <small>
                            Btech CS-AIML <br/>
                            <i>AKTU University</i>
                        </small>
                    </article>
                    <article className='about_card'>
                        <TfiWorld className='about_icon'/>
                        <h5>Location</h5>
                        <small>
                            Address
                        </small>
                    </article>
                    <article className='about_card'>
                        <BsTelephoneForward className='about_icon'/>
                        <h5>Contact</h5>
                        <small>
                            <ul>
                                <li>Phone:</li>
                                <li>Email:</li>
                            </ul>
                        </small>
                    </article>
                </div>
                <p>
                    As a full stack developer, I serve as a versatile architect of digital solutions, proficient in both front-end and back-end technologies. With a holistic understanding of the software development process, I possess the expertise to design, build, and deploy innovative web applications that seamlessly integrate user experience with robust functionality. From crafting engaging user interfaces to optimizing database performance, my multidisciplinary skill set enables me to tackle complex challenges and deliver high-quality solutions tailored to meet the diverse needs of clients and end-users.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About