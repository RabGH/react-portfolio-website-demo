import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=""></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1million+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Billions of Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Infinite projects completed, created earth</small>
            </article>

          </div>

          <p>
          Reprehenderit aute fugiat fugiat amet magna est. Aliquip 
          mollit qui velit est elit veniam tempor. Duis id dolore 
          voluptate Lorem. Reprehenderit veniam amet irure eu laboris. 
          Excepteur quis aliqua minim do dolore sit magna. Et occaecat 
          ad aute dolore. Eu reprehenderit veniam culpa magna voluptate 
          amet pariatur non.
          </p>
          <div>
            <a href="#contact" className='btn btn-primary'>Connect</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About