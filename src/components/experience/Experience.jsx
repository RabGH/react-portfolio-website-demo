import React from 'react'
import './experience.css'
// import {BsPatchCheckFill} from 'react-icons/bs'
import {SiHtml5} from 'react-icons/si'
import {RiCss3Fill} from 'react-icons/ri'
import {IoLogoJavascript} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FaNodeJs} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiPhpmyadmin} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills Off The Chain</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCss3Fill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className='experience__details-icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className='experience__details-icons'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* FRONTEND END */}

        <div className='experience__backend'>
          <h3> Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className='experience__details-icons'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className='experience__details-icons'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className='experience__details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPhpmyadmin className='experience__details-icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience