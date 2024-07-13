import React from 'react'
import Project1 from '../../../public/Imagess/pj1.png'
import Project2 from '/Imagess/Pj2.png'
import Project3 from '/Imagess/Home.png'
import './Projects.css'
function Projects() {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>Projects</h2>

        <div className='container project_cpntainer'>
            <article className='project_item'>
              <div className='project_item_image'>
                <img src={Project1} alt=''/>
              </div>
              <h3>Project 1</h3>
              <small className='text-light'>A Gemini clone website is a replication or imitation of Gemini, a minimalist web protocol designed for a lightweight and simplified browsing experience. Unlike traditional web protocols like HTTP/HTTPS, Gemini focuses on delivering plain text content with a limited set of formatting options, prioritizing privacy, and reducing complexity</small>
              <div className='project_item_btn'>
                <a href='https://github.com/Kartikey-Pandey/Gemini' className='btn'>Github</a>
              </div>

            </article>
            <article className='project_item'>
              <div className='project_item_image'>
                <img src={Project2} alt=''/>
              </div>
              <h3>Project 2</h3>
              <small className='text-light'>This full-stack web application, built with React and Next.js, offers an immersive experience for Star Wars enthusiasts. Users can browse a comprehensive list of characters from the Star Wars universe, leveraging data from the Star Wars API (SWAPI). The application showcases modern web development practices, including server-side rendering, API integration, and local storage utilization. It provides an engaging platform for fans to explore and interact with Star Wars character data in a visually appealing and user-friendly environment.</small>
              <div className='project_item_btn'>
                <a href='https://github.com/Kartikey-Pandey/Star-Wars-Fandom' className='btn'>Github</a>
              </div>

            </article>
            <article className='project_item'>
              <div className='project_item_image'>
                <img src={Project3} alt=''/>
              </div>
              <h3>Project 3</h3>
              <small className='text-light'>TMDB api is used to fetch movies and series data</small>
              <div className='project_item_btn'>
                <a href='https://github.com/Kartikey-Pandey/Movix' className='btn'>Github</a>
              </div>

            </article>
        </div>
    </section>
  )
}

export default Projects