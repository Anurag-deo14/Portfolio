import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uln9ao3', 'template_0okn4e4', form.current, '5wqVyge_3k-MNIbEq')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
             <article className='contact__option'>
                <HiOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>anuragjee2020@gmail.com</h5>
                <a href='mailto:anuragjee2020@gmail.com' target='_blank'>
                  Send a mail
                </a>
             </article>    
             <article className='contact__option'>
                <BsInstagram className='contact__option-icon'/>
                <h4>Instagram</h4>
                <h5>anuragdeo5</h5>
                <a href='https://msng.link/o/?anuragdeo5=ig' target='_blank'>
                  Dm me at Instagram
                </a>
             </article>    
             <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+91 6232192891</h5>
                <a href='https://api.whatsapp.com/send?phone=+916232192891&text=hi' target='_blank'>
                  Dm me at Whatsapp
                </a>
             </article>    
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required > </textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact