import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q859dgr', 'template_17lbpqh', form.current, 'PK-KxNRH4Fdry7iOn');

    e.target.reset();
    
  };


  const showAlert = () => {
    alert('Email Sent');
  }


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail className='contant__option-icon'/>
            <h4>Email</h4>
            <h5>Anal69Annihilator420@hotbabes.com</h5>
            <a href='mailto:Anal69Annihilator420@hotbabes.com'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contant__option-icon'/>
            <h4>Messenger</h4>
            <h5>YourNameFB</h5>
            <a href='https//m.me/profile.php?id=100004367928056'> {/* Sub */}
              Send a message
            </a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contant__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+961 71 557 750</h5> {/* If Sapp installed, no need public */}
            <a href='https://api.whatsapp.com/send?phone=+96171557750'>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Email Address' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={showAlert}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact