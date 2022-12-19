import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ANURAG</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experince'>Experince</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/anurag-deo-03410a229/'><AiFillLinkedin/></a>
        <a href='https://www.instagram.com/anuragdeo5/'><AiOutlineInstagram/></a>
        <a href='https://github.com/Anurag-deo14'><AiOutlineGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; ANURAG DEO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer