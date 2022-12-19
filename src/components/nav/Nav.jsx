import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {AiFillBook} from 'react-icons/ai'
import {BsBagDashFill} from 'react-icons/bs'
import {BiMessageAlt} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
      <a href='#experince' onClick={() => setActiveNav('#experince')} className={activeNav === '#experince' ? 'active' : ''}><AiFillBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBagDashFill /></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaGraduationCap /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAlt /></a>
    </nav>
  )
}

export default Nav